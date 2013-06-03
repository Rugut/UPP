
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
	///Восстановление сумм НДС ранее принятых к вычету, право на применение вычета по которым впоследствии исчезло
	///</summary>
	public partial class ВосстановлениеНДС:ДокументМенеджер
	{
		
		public static ДокументыСсылка.ВосстановлениеНДС НайтиПоСсылке(Guid _Ссылка)
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
					,_Fld6457RRef [Организация]
					,_Fld6458RRef [Ответственный]
					,_Fld6459 [Комментарий]
					,_Fld6460 [НачалоПериода]
					,_Fld6461 [КонецПериода]
					,_Fld6462 [ОтразитьВКнигеПродаж]
					From _Document340(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ВосстановлениеНДС();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.НачалоПериода = Читалка.GetDateTime(6);
							Ссылка.КонецПериода = Читалка.GetDateTime(7);
							Ссылка.ОтразитьВКнигеПродаж = ((byte[])Читалка.GetValue(8))[0]==1;
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
		
		public static ДокументыСсылка.ВосстановлениеНДС НайтиПоНомеру(string Номер)
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
					,_Fld6457RRef [Организация]
					,_Fld6458RRef [Ответственный]
					,_Fld6459 [Комментарий]
					,_Fld6460 [НачалоПериода]
					,_Fld6461 [КонецПериода]
					,_Fld6462 [ОтразитьВКнигеПродаж]
					From _Document340(NOLOCK)
					Where _Number = @Номер";
					Команда.Parameters.AddWithValue("Номер", Номер);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ВосстановлениеНДС();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.НачалоПериода = Читалка.GetDateTime(6);
							Ссылка.КонецПериода = Читалка.GetDateTime(7);
							Ссылка.ОтразитьВКнигеПродаж = ((byte[])Читалка.GetValue(8))[0]==1;
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
		
		public static ДокументыВыборка.ВосстановлениеНДС Выбрать()
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
					,_Fld6457RRef [Организация]
					,_Fld6458RRef [Ответственный]
					,_Fld6459 [Комментарий]
					,_Fld6460 [НачалоПериода]
					,_Fld6461 [КонецПериода]
					,_Fld6462 [ОтразитьВКнигеПродаж]
					From _Document340(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ВосстановлениеНДС();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ВосстановлениеНДС();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.НачалоПериода = Читалка.GetDateTime(6);
							Ссылка.КонецПериода = Читалка.GetDateTime(7);
							Ссылка.ОтразитьВКнигеПродаж = ((byte[])Читалка.GetValue(8))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ВосстановлениеНДС ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
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
					,_Fld6457RRef [Организация]
					,_Fld6458RRef [Ответственный]
					,_Fld6459 [Комментарий]
					,_Fld6460 [НачалоПериода]
					,_Fld6461 [КонецПериода]
					,_Fld6462 [ОтразитьВКнигеПродаж]
					From _Document340(NOLOCK)
					Where _IDRRef between @Мин and @Макс
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ВосстановлениеНДС();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ВосстановлениеНДС();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.НачалоПериода = Читалка.GetDateTime(6);
							Ссылка.КонецПериода = Читалка.GetDateTime(7);
							Ссылка.ОтразитьВКнигеПродаж = ((byte[])Читалка.GetValue(8))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ВосстановлениеНДС ВыбратьПоНомеру(int Первые,string Мин,string Макс)
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
					,_Fld6457RRef [Организация]
					,_Fld6458RRef [Ответственный]
					,_Fld6459 [Комментарий]
					,_Fld6460 [НачалоПериода]
					,_Fld6461 [КонецПериода]
					,_Fld6462 [ОтразитьВКнигеПродаж]
					From _Document340(NOLOCK)
					Where _Code between @Мин and @Макс
					Order by _Code", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ВосстановлениеНДС();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ВосстановлениеНДС();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.НачалоПериода = Читалка.GetDateTime(6);
							Ссылка.КонецПериода = Читалка.GetDateTime(7);
							Ссылка.ОтразитьВКнигеПродаж = ((byte[])Читалка.GetValue(8))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ВосстановлениеНДС СтраницаПоСсылке(int Размер,int Номер)
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
					,_Fld6457RRef [Организация]
					,_Fld6458RRef [Ответственный]
					,_Fld6459 [Комментарий]
					,_Fld6460 [НачалоПериода]
					,_Fld6461 [КонецПериода]
					,_Fld6462 [ОтразитьВКнигеПродаж]
					From _Document340(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ВосстановлениеНДС();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ВосстановлениеНДС();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.НачалоПериода = Читалка.GetDateTime(6);
							Ссылка.КонецПериода = Читалка.GetDateTime(7);
							Ссылка.ОтразитьВКнигеПродаж = ((byte[])Читалка.GetValue(8))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ВосстановлениеНДС СтраницаПоНомеру(int Размер,int Номер)
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
					,_Fld6457RRef [Организация]
					,_Fld6458RRef [Ответственный]
					,_Fld6459 [Комментарий]
					,_Fld6460 [НачалоПериода]
					,_Fld6461 [КонецПериода]
					,_Fld6462 [ОтразитьВКнигеПродаж]
					From _Document340(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ВосстановлениеНДС();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ВосстановлениеНДС();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.НачалоПериода = Читалка.GetDateTime(6);
							Ссылка.КонецПериода = Читалка.GetDateTime(7);
							Ссылка.ОтразитьВКнигеПродаж = ((byte[])Читалка.GetValue(8))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.ДокументыОбъект.ВосстановлениеНДС СоздатьЭлемент()
		{
			var Объект = new V82.ДокументыОбъект.ВосстановлениеНДС();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.Комментарий = "";
			return Объект;
		}
	}
}