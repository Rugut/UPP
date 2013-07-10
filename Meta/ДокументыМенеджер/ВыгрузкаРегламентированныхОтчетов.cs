
using System;
using System.Data.SqlClient;
using V82;
using V82.ДокументыСсылка;
using V82.Документы;//Менеджер;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.Документы//Менеджер
{
	public partial class ВыгрузкаРегламентированныхОтчетов:ДокументМенеджер
	{
		
		public static ДокументыСсылка.ВыгрузкаРегламентированныхОтчетов НайтиПоСсылке(Guid _Ссылка)
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
					,_Fld4007 [ПериодПо]
					,_Fld4008RRef [Организация]
					,_Fld4009 [КодИМНС]
					,_Fld4010 [Комментарий]
					,_Fld26720 [флОтборИФНС]
					From _Document243(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ВыгрузкаРегламентированныхОтчетов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ПериодПо = Читалка.GetDateTime(3);
							Ссылка.КодИМНС = Читалка.GetString(5);
							Ссылка.Комментарий = Читалка.GetString(6);
							Ссылка.флОтборИФНС = ((byte[])Читалка.GetValue(7))[0]==1;
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
		
		public static ДокументыСсылка.ВыгрузкаРегламентированныхОтчетов НайтиПоНомеру(string Номер)
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
					,_Fld4007 [ПериодПо]
					,_Fld4008RRef [Организация]
					,_Fld4009 [КодИМНС]
					,_Fld4010 [Комментарий]
					,_Fld26720 [флОтборИФНС]
					From _Document243(NOLOCK)
					Where _Number = @Номер";
					Команда.Parameters.AddWithValue("Номер", Номер);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ВыгрузкаРегламентированныхОтчетов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ПериодПо = Читалка.GetDateTime(3);
							Ссылка.КодИМНС = Читалка.GetString(5);
							Ссылка.Комментарий = Читалка.GetString(6);
							Ссылка.флОтборИФНС = ((byte[])Читалка.GetValue(7))[0]==1;
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
		
		public static ДокументыВыборка.ВыгрузкаРегламентированныхОтчетов Выбрать()
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
					,_Fld4007 [ПериодПо]
					,_Fld4008RRef [Организация]
					,_Fld4009 [КодИМНС]
					,_Fld4010 [Комментарий]
					,_Fld26720 [флОтборИФНС]
					From _Document243(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ВыгрузкаРегламентированныхОтчетов();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ВыгрузкаРегламентированныхОтчетов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ПериодПо = Читалка.GetDateTime(3);
							Ссылка.КодИМНС = Читалка.GetString(5);
							Ссылка.Комментарий = Читалка.GetString(6);
							Ссылка.флОтборИФНС = ((byte[])Читалка.GetValue(7))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ВыгрузкаРегламентированныхОтчетов ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
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
					,_Fld4007 [ПериодПо]
					,_Fld4008RRef [Организация]
					,_Fld4009 [КодИМНС]
					,_Fld4010 [Комментарий]
					,_Fld26720 [флОтборИФНС]
					From _Document243(NOLOCK)
					Where _IDRRef between @Мин and @Макс
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ВыгрузкаРегламентированныхОтчетов();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ВыгрузкаРегламентированныхОтчетов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ПериодПо = Читалка.GetDateTime(3);
							Ссылка.КодИМНС = Читалка.GetString(5);
							Ссылка.Комментарий = Читалка.GetString(6);
							Ссылка.флОтборИФНС = ((byte[])Читалка.GetValue(7))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ВыгрузкаРегламентированныхОтчетов ВыбратьПоНомеру(int Первые,string Мин,string Макс)
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
					,_Fld4007 [ПериодПо]
					,_Fld4008RRef [Организация]
					,_Fld4009 [КодИМНС]
					,_Fld4010 [Комментарий]
					,_Fld26720 [флОтборИФНС]
					From _Document243(NOLOCK)
					Where _Code between @Мин and @Макс
					Order by _Code", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ВыгрузкаРегламентированныхОтчетов();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ВыгрузкаРегламентированныхОтчетов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ПериодПо = Читалка.GetDateTime(3);
							Ссылка.КодИМНС = Читалка.GetString(5);
							Ссылка.Комментарий = Читалка.GetString(6);
							Ссылка.флОтборИФНС = ((byte[])Читалка.GetValue(7))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ВыгрузкаРегламентированныхОтчетов СтраницаПоСсылке(int Размер,int Номер)
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
					,_Fld4007 [ПериодПо]
					,_Fld4008RRef [Организация]
					,_Fld4009 [КодИМНС]
					,_Fld4010 [Комментарий]
					,_Fld26720 [флОтборИФНС]
					From _Document243(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ВыгрузкаРегламентированныхОтчетов();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ВыгрузкаРегламентированныхОтчетов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ПериодПо = Читалка.GetDateTime(3);
							Ссылка.КодИМНС = Читалка.GetString(5);
							Ссылка.Комментарий = Читалка.GetString(6);
							Ссылка.флОтборИФНС = ((byte[])Читалка.GetValue(7))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ВыгрузкаРегламентированныхОтчетов СтраницаПоНомеру(int Размер,int Номер)
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
					,_Fld4007 [ПериодПо]
					,_Fld4008RRef [Организация]
					,_Fld4009 [КодИМНС]
					,_Fld4010 [Комментарий]
					,_Fld26720 [флОтборИФНС]
					From _Document243(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ВыгрузкаРегламентированныхОтчетов();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ВыгрузкаРегламентированныхОтчетов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ПериодПо = Читалка.GetDateTime(3);
							Ссылка.КодИМНС = Читалка.GetString(5);
							Ссылка.Комментарий = Читалка.GetString(6);
							Ссылка.флОтборИФНС = ((byte[])Читалка.GetValue(7))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.ДокументыОбъект.ВыгрузкаРегламентированныхОтчетов СоздатьЭлемент()
		{
			var Объект = new V82.ДокументыОбъект.ВыгрузкаРегламентированныхОтчетов();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.КодИМНС = "";
			Объект.Комментарий = "";
			return Объект;
		}
	}
}