import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  StatusBar,
  ScrollView,
  Keyboard,
} from "react-native";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

type ProgressCardProps = {
  completed: number;
  total: number;
};

type AddTaskFormProps = {
  onAddTask: (title: string) => void;
};

type TaskItemProps = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

// COMPONENT 1: ProgressCard
function ProgressCard({ completed, total }: ProgressCardProps) {
  const percentage =
    total === 0 ? 0 : (completed / total) * 100;

  return (
    <View style={styles.progressCard}>
      <Text style={styles.progressNumber}>
        {completed}/{total}
      </Text>
      <Text style={styles.progressLabel}>Tasks Completed</Text>

      <View style={styles.progressBackground}>
        <View
          style={[styles.progressFill, { width: `${percentage}%` }]}
        />
      </View>
    </View>
  );
}

// COMPONENT 2: AddTaskForm
function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    const trimmedTitle = title.trim();

    if (trimmedTitle === "") {
      return;
    }

    onAddTask(trimmedTitle);
    setTitle("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.addContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a new study task..."
        placeholderTextColor="#888888"
        value={title}
        onChangeText={setTitle}
        onSubmitEditing={handleAdd}
        returnKeyType="done"
      />

      <Pressable
        style={({ pressed }) => [
          styles.addButton,
          pressed && styles.buttonPressed,
        ]}
        onPress={handleAdd}
      >
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </View>
  );
}

// COMPONENT 3: TaskItem
function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <View style={styles.taskCard}>
      <Pressable
        style={styles.taskMain}
        onPress={() => onToggle(task.id)}
      >
        <View
          style={[
            styles.checkbox,
            task.completed && styles.checkboxChecked,
          ]}
        >
          {task.completed && (
            <Text style={styles.checkmark}>✓</Text>
          )}
        </View>

        <Text
          style={[
            styles.taskText,
            task.completed && styles.taskCompleted,
          ]}
        >
          {task.title}
        </Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.deleteButton,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => onDelete(task.id)}
        accessibilityLabel={`Delete ${task.title}`}
      >
        <Text style={styles.deleteText}>×</Text>
      </Pressable>
    </View>
  );
}

// MAIN COMPONENT: App
export default function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Review Constructor Overloading", completed: false },
    { id: "2", title: "Study Static vs Non-static", completed: false },
    { id: "3", title: "Practice Getters and Setters", completed: false },
    { id: "4", title: "Review If-Else Statements", completed: false },
    { id: "5", title: "Take a Practice Quiz", completed: false },
  ]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  };

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.greeting}>MY STUDY PLANNER</Text>
        <Text style={styles.heading}>My Tasks</Text>
        <Text style={styles.subtitle}>Advanced Programming</Text>

        <ProgressCard
          completed={completedCount}
          total={tasks.length}
        />
      </View>

      <AddTaskForm onAddTask={addTask} />

      <Text style={styles.sectionTitle}>YOUR STUDY TASKS</Text>

      <ScrollView
        style={styles.taskList}
        contentContainerStyle={styles.taskListContent}
        keyboardShouldPersistTaps="handled"
      >
        {tasks.length === 0 ? (
          <Text style={styles.emptyText}>
            No tasks yet. Add your first task!
          </Text>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))
        )}
      </ScrollView>

      <Text style={styles.footer}>
        Small steps. Better results.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
    paddingTop: 18,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  greeting: {
    color: "#A3A3A3",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
  },
  heading: {
    color: "#F5F5F5",
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 8,
  },
  subtitle: {
    color: "#A3A3A3",
    fontSize: 15,
    marginTop: 5,
  },
  progressCard: {
    backgroundColor: "#262626",
    borderRadius: 16,
    padding: 18,
    marginTop: 24,
    marginBottom: 20,
  },
  progressNumber: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
  },
  progressLabel: {
    color: "#A3A3A3",
    fontSize: 13,
    marginTop: 4,
    marginBottom: 14,
  },
  progressBackground: {
    height: 6,
    backgroundColor: "#404040",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressFill: {
    height: 6,
    backgroundColor: "#D4D4D4",
    borderRadius: 5,
  },
  addContainer: {
    flexDirection: "row",
    paddingHorizontal: 24,
    gap: 10,
    marginBottom: 24,
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#404040",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 13,
    fontSize: 14,
  },
  addButton: {
    width: 50,
    backgroundColor: "#E5E5E5",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#171717",
    fontSize: 28,
    fontWeight: "400",
  },
  buttonPressed: {
    opacity: 0.65,
    transform: [{ scale: 0.96 }],
  },
  sectionTitle: {
    color: "#A3A3A3",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.5,
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  taskList: {
    flex: 1,
    paddingHorizontal: 24,
  },
  taskListContent: {
    paddingBottom: 16,
    gap: 10,
  },
  taskCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262626",
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 12,
    paddingVertical: 15,
    paddingLeft: 14,
    paddingRight: 10,
  },
  taskMain: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1.5,
    borderColor: "#737373",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "#D4D4D4",
    borderColor: "#D4D4D4",
  },
  checkmark: {
    color: "#171717",
    fontSize: 15,
    fontWeight: "bold",
  },
  taskText: {
    flex: 1,
    color: "#F5F5F5",
    fontSize: 14,
    lineHeight: 20,
  },
  taskCompleted: {
    color: "#888888",
    textDecorationLine: "line-through",
  },
  deleteButton: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 6,
  },
  deleteText: {
    color: "#A3A3A3",
    fontSize: 25,
  },
  emptyText: {
    color: "#A3A3A3",
    textAlign: "center",
    marginTop: 30,
    fontSize: 14,
  },
  footer: {
    color: "#737373",
    textAlign: "center",
    fontSize: 12,
    paddingVertical: 14,
  },
});