﻿
using System;
using System.Data.SqlClient;
using V82;
using V82.ДокументыСсылка;
using V82.Документы;//Менеджер;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.Документы//Менеджер
{
	///<summary>
	///(Регл)
	///</summary>
	public partial class ПередачаДСВвПФР:ДокументМенеджер
	{
		
		public static ДокументыСсылка.ПередачаДСВвПФР НайтиПоСсылке(Guid _Ссылка)
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
					,_Fld22650RRef [Организация]
					,_Fld22651RRef [Ответственный]
					,_Fld22652 [Комментарий]
					,_Fld22653 [КраткийСоставДокумента]
					,_Fld22654 [НаименованиеПФР]
					,_Fld22655RRef [ФорматФайла]
					,_Fld27195 [НомерПачки]
					From _Document22649(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПередачаДСВвПФР();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.КраткийСоставДокумента = Читалка.GetString(6);
							Ссылка.НаименованиеПФР = Читалка.GetString(7);
							Ссылка.ФорматФайла = V82.Перечисления/*Ссылка*/.ФорматФайлаПФР.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
							Ссылка.НомерПачки = Читалка.GetString(9);
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
		
		public static ДокументыСсылка.ПередачаДСВвПФР НайтиПоНомеру(string Номер)
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
					,_Fld22650RRef [Организация]
					,_Fld22651RRef [Ответственный]
					,_Fld22652 [Комментарий]
					,_Fld22653 [КраткийСоставДокумента]
					,_Fld22654 [НаименованиеПФР]
					,_Fld22655RRef [ФорматФайла]
					,_Fld27195 [НомерПачки]
					From _Document22649(NOLOCK)
					Where _Number = @Номер";
					Команда.Parameters.AddWithValue("Номер", Номер);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПередачаДСВвПФР();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.КраткийСоставДокумента = Читалка.GetString(6);
							Ссылка.НаименованиеПФР = Читалка.GetString(7);
							Ссылка.ФорматФайла = V82.Перечисления/*Ссылка*/.ФорматФайлаПФР.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
							Ссылка.НомерПачки = Читалка.GetString(9);
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
		
		public static ДокументыВыборка.ПередачаДСВвПФР Выбрать()
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
					,_Fld22650RRef [Организация]
					,_Fld22651RRef [Ответственный]
					,_Fld22652 [Комментарий]
					,_Fld22653 [КраткийСоставДокумента]
					,_Fld22654 [НаименованиеПФР]
					,_Fld22655RRef [ФорматФайла]
					,_Fld27195 [НомерПачки]
					From _Document22649(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ПередачаДСВвПФР();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПередачаДСВвПФР();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.КраткийСоставДокумента = Читалка.GetString(6);
							Ссылка.НаименованиеПФР = Читалка.GetString(7);
							Ссылка.ФорматФайла = V82.Перечисления/*Ссылка*/.ФорматФайлаПФР.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
							Ссылка.НомерПачки = Читалка.GetString(9);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ПередачаДСВвПФР ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
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
					,_Fld22650RRef [Организация]
					,_Fld22651RRef [Ответственный]
					,_Fld22652 [Комментарий]
					,_Fld22653 [КраткийСоставДокумента]
					,_Fld22654 [НаименованиеПФР]
					,_Fld22655RRef [ФорматФайла]
					,_Fld27195 [НомерПачки]
					From _Document22649(NOLOCK)
					Where _IDRRef between @Мин and @Макс
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ПередачаДСВвПФР();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПередачаДСВвПФР();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.КраткийСоставДокумента = Читалка.GetString(6);
							Ссылка.НаименованиеПФР = Читалка.GetString(7);
							Ссылка.ФорматФайла = V82.Перечисления/*Ссылка*/.ФорматФайлаПФР.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
							Ссылка.НомерПачки = Читалка.GetString(9);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ПередачаДСВвПФР ВыбратьПоНомеру(int Первые,string Мин,string Макс)
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
					,_Fld22650RRef [Организация]
					,_Fld22651RRef [Ответственный]
					,_Fld22652 [Комментарий]
					,_Fld22653 [КраткийСоставДокумента]
					,_Fld22654 [НаименованиеПФР]
					,_Fld22655RRef [ФорматФайла]
					,_Fld27195 [НомерПачки]
					From _Document22649(NOLOCK)
					Where _Code between @Мин and @Макс
					Order by _Code", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ПередачаДСВвПФР();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПередачаДСВвПФР();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.КраткийСоставДокумента = Читалка.GetString(6);
							Ссылка.НаименованиеПФР = Читалка.GetString(7);
							Ссылка.ФорматФайла = V82.Перечисления/*Ссылка*/.ФорматФайлаПФР.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
							Ссылка.НомерПачки = Читалка.GetString(9);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ПередачаДСВвПФР СтраницаПоСсылке(int Размер,int Номер)
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
					,_Fld22650RRef [Организация]
					,_Fld22651RRef [Ответственный]
					,_Fld22652 [Комментарий]
					,_Fld22653 [КраткийСоставДокумента]
					,_Fld22654 [НаименованиеПФР]
					,_Fld22655RRef [ФорматФайла]
					,_Fld27195 [НомерПачки]
					From _Document22649(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ПередачаДСВвПФР();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПередачаДСВвПФР();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.КраткийСоставДокумента = Читалка.GetString(6);
							Ссылка.НаименованиеПФР = Читалка.GetString(7);
							Ссылка.ФорматФайла = V82.Перечисления/*Ссылка*/.ФорматФайлаПФР.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
							Ссылка.НомерПачки = Читалка.GetString(9);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ПередачаДСВвПФР СтраницаПоНомеру(int Размер,int Номер)
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
					,_Fld22650RRef [Организация]
					,_Fld22651RRef [Ответственный]
					,_Fld22652 [Комментарий]
					,_Fld22653 [КраткийСоставДокумента]
					,_Fld22654 [НаименованиеПФР]
					,_Fld22655RRef [ФорматФайла]
					,_Fld27195 [НомерПачки]
					From _Document22649(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ПередачаДСВвПФР();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПередачаДСВвПФР();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.КраткийСоставДокумента = Читалка.GetString(6);
							Ссылка.НаименованиеПФР = Читалка.GetString(7);
							Ссылка.ФорматФайла = V82.Перечисления/*Ссылка*/.ФорматФайлаПФР.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
							Ссылка.НомерПачки = Читалка.GetString(9);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.ДокументыОбъект.ПередачаДСВвПФР СоздатьЭлемент()
		{
			var Объект = new V82.ДокументыОбъект.ПередачаДСВвПФР();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.Комментарий = "";
			Объект.КраткийСоставДокумента = "";
			Объект.НаименованиеПФР = "";
			Объект.НомерПачки = "";
			Объект.ФорматФайла = V82.Перечисления/*Ссылка*/.ФорматФайлаПФР.ПустаяСсылка;
			return Объект;
		}
	}
}