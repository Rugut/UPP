
using System;
using System.Data.SqlClient;
using V82;
using V82.СправочникиСсылка;
using V82.Справочники;//Менеджер;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.Справочники//Менеджер
{
	///<summary>
	///Вложения электронных писем
	///</summary>
	public partial class ВложенияЭлектронныхПисем:СправочникМенеджер
	{
		
		public static СправочникиСсылка.ВложенияЭлектронныхПисем НайтиПоСсылке(Guid _Ссылка)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_Description [Наименование]
					,_Fld964RRef [Объект]
					,_Fld965 [ИмяФайла]
					,_Fld966 [Хранилище]
					,_Fld967 [ИДФайлаПочтовогоПисьма]
					,_Fld968_TYPE [Предмет_Тип],_Fld968_RRRef [Предмет],_Fld968_RTRef [Предмет_Вид]
					,_Fld21221 [ТекстФайла]
					From _Reference30(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ВложенияЭлектронныхПисем();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Наименование = Читалка.GetString(4);
								//Ссылка.Объект = new V82.ДокументыСсылка.ЭлектронноеПисьмо((byte[])Читалка.GetValue(5));
								Ссылка.ИмяФайла = Читалка.GetString(6);
								Ссылка.ИДФайлаПочтовогоПисьма = Читалка.GetString(8);
							return Ссылка;
						}
						else
						{
							return null;
						}
					}
				}
			}
		}
		
		public static СправочникиВыборка.ВложенияЭлектронныхПисем Выбрать()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1000 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_Description [Наименование]
					,_Fld964RRef [Объект]
					,_Fld965 [ИмяФайла]
					,_Fld966 [Хранилище]
					,_Fld967 [ИДФайлаПочтовогоПисьма]
					,_Fld968_TYPE [Предмет_Тип],_Fld968_RRRef [Предмет],_Fld968_RTRef [Предмет_Вид]
					,_Fld21221 [ТекстФайла]
					From _Reference30(NOLOCK) ";
					var Выборка = new V82.СправочникиВыборка.ВложенияЭлектронныхПисем();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ВложенияЭлектронныхПисем();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Наименование = Читалка.GetString(4);
								//Ссылка.Объект = new V82.ДокументыСсылка.ЭлектронноеПисьмо((byte[])Читалка.GetValue(5));
								Ссылка.ИмяФайла = Читалка.GetString(6);
								Ссылка.ИДФайлаПочтовогоПисьма = Читалка.GetString(8);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ВложенияЭлектронныхПисем ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = string.Format(@"Select top {0} 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_Description [Наименование]
					,_Fld964RRef [Объект]
					,_Fld965 [ИмяФайла]
					,_Fld966 [Хранилище]
					,_Fld967 [ИДФайлаПочтовогоПисьма]
					,_Fld968_TYPE [Предмет_Тип],_Fld968_RRRef [Предмет],_Fld968_RTRef [Предмет_Вид]
					,_Fld21221 [ТекстФайла]
					From _Reference30(NOLOCK)
					Where _IDRRef between @Мин and @Макс 
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.СправочникиВыборка.ВложенияЭлектронныхПисем();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ВложенияЭлектронныхПисем();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Наименование = Читалка.GetString(4);
								//Ссылка.Объект = new V82.ДокументыСсылка.ЭлектронноеПисьмо((byte[])Читалка.GetValue(5));
								Ссылка.ИмяФайла = Читалка.GetString(6);
								Ссылка.ИДФайлаПочтовогоПисьма = Читалка.GetString(8);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ВложенияЭлектронныхПисем ВыбратьПоНаименованию(int Первые,string Мин,string Макс)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = string.Format(@"Select top {0} 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_Description [Наименование]
					,_Fld964RRef [Объект]
					,_Fld965 [ИмяФайла]
					,_Fld966 [Хранилище]
					,_Fld967 [ИДФайлаПочтовогоПисьма]
					,_Fld968_TYPE [Предмет_Тип],_Fld968_RRRef [Предмет],_Fld968_RTRef [Предмет_Вид]
					,_Fld21221 [ТекстФайла]
					From _Reference30(NOLOCK)
					Where _Description between @Мин and @Макс
					Order by _Description", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.СправочникиВыборка.ВложенияЭлектронныхПисем();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ВложенияЭлектронныхПисем();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Наименование = Читалка.GetString(4);
								//Ссылка.Объект = new V82.ДокументыСсылка.ЭлектронноеПисьмо((byte[])Читалка.GetValue(5));
								Ссылка.ИмяФайла = Читалка.GetString(6);
								Ссылка.ИДФайлаПочтовогоПисьма = Читалка.GetString(8);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ВложенияЭлектронныхПисем СтраницаПоСсылке(int Размер,int Номер)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1000 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_Description [Наименование]
					,_Fld964RRef [Объект]
					,_Fld965 [ИмяФайла]
					,_Fld966 [Хранилище]
					,_Fld967 [ИДФайлаПочтовогоПисьма]
					,_Fld968_TYPE [Предмет_Тип],_Fld968_RRRef [Предмет],_Fld968_RTRef [Предмет_Вид]
					,_Fld21221 [ТекстФайла]
					From _Reference30(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.ВложенияЭлектронныхПисем();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ВложенияЭлектронныхПисем();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Наименование = Читалка.GetString(4);
								//Ссылка.Объект = new V82.ДокументыСсылка.ЭлектронноеПисьмо((byte[])Читалка.GetValue(5));
								Ссылка.ИмяФайла = Читалка.GetString(6);
								Ссылка.ИДФайлаПочтовогоПисьма = Читалка.GetString(8);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ВложенияЭлектронныхПисем СтраницаПоНаименованию(int Размер,int Номер)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1000 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_Description [Наименование]
					,_Fld964RRef [Объект]
					,_Fld965 [ИмяФайла]
					,_Fld966 [Хранилище]
					,_Fld967 [ИДФайлаПочтовогоПисьма]
					,_Fld968_TYPE [Предмет_Тип],_Fld968_RRRef [Предмет],_Fld968_RTRef [Предмет_Вид]
					,_Fld21221 [ТекстФайла]
					From _Reference30(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.ВложенияЭлектронныхПисем();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ВложенияЭлектронныхПисем();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Наименование = Читалка.GetString(4);
								//Ссылка.Объект = new V82.ДокументыСсылка.ЭлектронноеПисьмо((byte[])Читалка.GetValue(5));
								Ссылка.ИмяФайла = Читалка.GetString(6);
								Ссылка.ИДФайлаПочтовогоПисьма = Читалка.GetString(8);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.СправочникиОбъект.ВложенияЭлектронныхПисем СоздатьЭлемент()
		{
			var Объект = new V82.СправочникиОбъект.ВложенияЭлектронныхПисем();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.ИмяФайла = "";
			Объект.ИДФайлаПочтовогоПисьма = "";
			return Объект;
		}
	}
}