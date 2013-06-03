
using System;
using System.Data.SqlClient;
using V82;
using V82.ДокументыСсылка;
using V82.Документы;//Менеджер;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.Документы//Менеджер
{
	public partial class РезервированиеПомещений:ДокументМенеджер
	{
		
		public static ДокументыСсылка.РезервированиеПомещений НайтиПоСсылке(Guid _Ссылка)
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
					,_Fld16679RRef [Занятость]
					,_Fld16680 [Комментарий]
					,_Fld16681 [ДатаНачала]
					,_Fld16682 [ДатаОкончания]
					,_Fld16683RRef [Ответственный]
					,_Fld16684RRef [Помещение]
					From _Document578(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.РезервированиеПомещений();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Занятость = V82.Перечисления/*Ссылка*/.Занятость.ПустаяСсылка.Получить((byte[])Читалка.GetValue(3));
							Ссылка.Комментарий = Читалка.GetString(4);
							Ссылка.ДатаНачала = Читалка.GetDateTime(5);
							Ссылка.ДатаОкончания = Читалка.GetDateTime(6);
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
		
		public static ДокументыСсылка.РезервированиеПомещений НайтиПоНомеру(string Номер)
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
					,_Fld16679RRef [Занятость]
					,_Fld16680 [Комментарий]
					,_Fld16681 [ДатаНачала]
					,_Fld16682 [ДатаОкончания]
					,_Fld16683RRef [Ответственный]
					,_Fld16684RRef [Помещение]
					From _Document578(NOLOCK)
					Where _Number = @Номер";
					Команда.Parameters.AddWithValue("Номер", Номер);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.РезервированиеПомещений();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Занятость = V82.Перечисления/*Ссылка*/.Занятость.ПустаяСсылка.Получить((byte[])Читалка.GetValue(3));
							Ссылка.Комментарий = Читалка.GetString(4);
							Ссылка.ДатаНачала = Читалка.GetDateTime(5);
							Ссылка.ДатаОкончания = Читалка.GetDateTime(6);
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
		
		public static ДокументыВыборка.РезервированиеПомещений Выбрать()
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
					,_Fld16679RRef [Занятость]
					,_Fld16680 [Комментарий]
					,_Fld16681 [ДатаНачала]
					,_Fld16682 [ДатаОкончания]
					,_Fld16683RRef [Ответственный]
					,_Fld16684RRef [Помещение]
					From _Document578(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.РезервированиеПомещений();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.РезервированиеПомещений();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Занятость = V82.Перечисления/*Ссылка*/.Занятость.ПустаяСсылка.Получить((byte[])Читалка.GetValue(3));
							Ссылка.Комментарий = Читалка.GetString(4);
							Ссылка.ДатаНачала = Читалка.GetDateTime(5);
							Ссылка.ДатаОкончания = Читалка.GetDateTime(6);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.РезервированиеПомещений ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
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
					,_Fld16679RRef [Занятость]
					,_Fld16680 [Комментарий]
					,_Fld16681 [ДатаНачала]
					,_Fld16682 [ДатаОкончания]
					,_Fld16683RRef [Ответственный]
					,_Fld16684RRef [Помещение]
					From _Document578(NOLOCK)
					Where _IDRRef between @Мин and @Макс
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.РезервированиеПомещений();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.РезервированиеПомещений();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Занятость = V82.Перечисления/*Ссылка*/.Занятость.ПустаяСсылка.Получить((byte[])Читалка.GetValue(3));
							Ссылка.Комментарий = Читалка.GetString(4);
							Ссылка.ДатаНачала = Читалка.GetDateTime(5);
							Ссылка.ДатаОкончания = Читалка.GetDateTime(6);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.РезервированиеПомещений ВыбратьПоНомеру(int Первые,string Мин,string Макс)
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
					,_Fld16679RRef [Занятость]
					,_Fld16680 [Комментарий]
					,_Fld16681 [ДатаНачала]
					,_Fld16682 [ДатаОкончания]
					,_Fld16683RRef [Ответственный]
					,_Fld16684RRef [Помещение]
					From _Document578(NOLOCK)
					Where _Code between @Мин and @Макс
					Order by _Code", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.РезервированиеПомещений();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.РезервированиеПомещений();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Занятость = V82.Перечисления/*Ссылка*/.Занятость.ПустаяСсылка.Получить((byte[])Читалка.GetValue(3));
							Ссылка.Комментарий = Читалка.GetString(4);
							Ссылка.ДатаНачала = Читалка.GetDateTime(5);
							Ссылка.ДатаОкончания = Читалка.GetDateTime(6);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.РезервированиеПомещений СтраницаПоСсылке(int Размер,int Номер)
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
					,_Fld16679RRef [Занятость]
					,_Fld16680 [Комментарий]
					,_Fld16681 [ДатаНачала]
					,_Fld16682 [ДатаОкончания]
					,_Fld16683RRef [Ответственный]
					,_Fld16684RRef [Помещение]
					From _Document578(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.РезервированиеПомещений();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.РезервированиеПомещений();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Занятость = V82.Перечисления/*Ссылка*/.Занятость.ПустаяСсылка.Получить((byte[])Читалка.GetValue(3));
							Ссылка.Комментарий = Читалка.GetString(4);
							Ссылка.ДатаНачала = Читалка.GetDateTime(5);
							Ссылка.ДатаОкончания = Читалка.GetDateTime(6);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.РезервированиеПомещений СтраницаПоНомеру(int Размер,int Номер)
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
					,_Fld16679RRef [Занятость]
					,_Fld16680 [Комментарий]
					,_Fld16681 [ДатаНачала]
					,_Fld16682 [ДатаОкончания]
					,_Fld16683RRef [Ответственный]
					,_Fld16684RRef [Помещение]
					From _Document578(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.РезервированиеПомещений();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.РезервированиеПомещений();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Занятость = V82.Перечисления/*Ссылка*/.Занятость.ПустаяСсылка.Получить((byte[])Читалка.GetValue(3));
							Ссылка.Комментарий = Читалка.GetString(4);
							Ссылка.ДатаНачала = Читалка.GetDateTime(5);
							Ссылка.ДатаОкончания = Читалка.GetDateTime(6);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.ДокументыОбъект.РезервированиеПомещений СоздатьЭлемент()
		{
			var Объект = new V82.ДокументыОбъект.РезервированиеПомещений();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.Комментарий = "";
			Объект.Занятость = V82.Перечисления/*Ссылка*/.Занятость.ПустаяСсылка;
			return Объект;
		}
	}
}