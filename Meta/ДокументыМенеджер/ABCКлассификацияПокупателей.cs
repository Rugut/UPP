
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
	///(Упр)
	///</summary>
	public partial class ABCКлассификацияПокупателей:ДокументМенеджер
	{
		
		public static ДокументыСсылка.ABCКлассификацияПокупателей НайтиПоСсылке(Guid _Ссылка)
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
					,_Fld4357 [ДатаНачала]
					,_Fld4358 [ДатаОкончания]
					,_Fld4359 [ПроцентAКласса]
					,_Fld4360 [ПроцентBКласса]
					,_Fld4361 [ПроцентCКласса]
					,_Fld4362 [Комментарий]
					,_Fld4363RRef [Ответственный]
					From _Document297(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ABCКлассификацияПокупателей();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ДатаНачала = Читалка.GetDateTime(3);
							Ссылка.ДатаОкончания = Читалка.GetDateTime(4);
							Ссылка.ПроцентAКласса = Читалка.GetDecimal(5);
							Ссылка.ПроцентBКласса = Читалка.GetDecimal(6);
							Ссылка.ПроцентCКласса = Читалка.GetDecimal(7);
							Ссылка.Комментарий = Читалка.GetString(8);
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
		
		public static ДокументыСсылка.ABCКлассификацияПокупателей НайтиПоНомеру(string Номер)
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
					,_Fld4357 [ДатаНачала]
					,_Fld4358 [ДатаОкончания]
					,_Fld4359 [ПроцентAКласса]
					,_Fld4360 [ПроцентBКласса]
					,_Fld4361 [ПроцентCКласса]
					,_Fld4362 [Комментарий]
					,_Fld4363RRef [Ответственный]
					From _Document297(NOLOCK)
					Where _Number = @Номер";
					Команда.Parameters.AddWithValue("Номер", Номер);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ABCКлассификацияПокупателей();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ДатаНачала = Читалка.GetDateTime(3);
							Ссылка.ДатаОкончания = Читалка.GetDateTime(4);
							Ссылка.ПроцентAКласса = Читалка.GetDecimal(5);
							Ссылка.ПроцентBКласса = Читалка.GetDecimal(6);
							Ссылка.ПроцентCКласса = Читалка.GetDecimal(7);
							Ссылка.Комментарий = Читалка.GetString(8);
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
		
		public static ДокументыВыборка.ABCКлассификацияПокупателей Выбрать()
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
					,_Fld4357 [ДатаНачала]
					,_Fld4358 [ДатаОкончания]
					,_Fld4359 [ПроцентAКласса]
					,_Fld4360 [ПроцентBКласса]
					,_Fld4361 [ПроцентCКласса]
					,_Fld4362 [Комментарий]
					,_Fld4363RRef [Ответственный]
					From _Document297(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ABCКлассификацияПокупателей();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ABCКлассификацияПокупателей();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ДатаНачала = Читалка.GetDateTime(3);
							Ссылка.ДатаОкончания = Читалка.GetDateTime(4);
							Ссылка.ПроцентAКласса = Читалка.GetDecimal(5);
							Ссылка.ПроцентBКласса = Читалка.GetDecimal(6);
							Ссылка.ПроцентCКласса = Читалка.GetDecimal(7);
							Ссылка.Комментарий = Читалка.GetString(8);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ABCКлассификацияПокупателей ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
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
					,_Fld4357 [ДатаНачала]
					,_Fld4358 [ДатаОкончания]
					,_Fld4359 [ПроцентAКласса]
					,_Fld4360 [ПроцентBКласса]
					,_Fld4361 [ПроцентCКласса]
					,_Fld4362 [Комментарий]
					,_Fld4363RRef [Ответственный]
					From _Document297(NOLOCK)
					Where _IDRRef between @Мин and @Макс
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ABCКлассификацияПокупателей();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ABCКлассификацияПокупателей();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ДатаНачала = Читалка.GetDateTime(3);
							Ссылка.ДатаОкончания = Читалка.GetDateTime(4);
							Ссылка.ПроцентAКласса = Читалка.GetDecimal(5);
							Ссылка.ПроцентBКласса = Читалка.GetDecimal(6);
							Ссылка.ПроцентCКласса = Читалка.GetDecimal(7);
							Ссылка.Комментарий = Читалка.GetString(8);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ABCКлассификацияПокупателей ВыбратьПоНомеру(int Первые,string Мин,string Макс)
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
					,_Fld4357 [ДатаНачала]
					,_Fld4358 [ДатаОкончания]
					,_Fld4359 [ПроцентAКласса]
					,_Fld4360 [ПроцентBКласса]
					,_Fld4361 [ПроцентCКласса]
					,_Fld4362 [Комментарий]
					,_Fld4363RRef [Ответственный]
					From _Document297(NOLOCK)
					Where _Code between @Мин and @Макс
					Order by _Code", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ABCКлассификацияПокупателей();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ABCКлассификацияПокупателей();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ДатаНачала = Читалка.GetDateTime(3);
							Ссылка.ДатаОкончания = Читалка.GetDateTime(4);
							Ссылка.ПроцентAКласса = Читалка.GetDecimal(5);
							Ссылка.ПроцентBКласса = Читалка.GetDecimal(6);
							Ссылка.ПроцентCКласса = Читалка.GetDecimal(7);
							Ссылка.Комментарий = Читалка.GetString(8);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ABCКлассификацияПокупателей СтраницаПоСсылке(int Размер,int Номер)
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
					,_Fld4357 [ДатаНачала]
					,_Fld4358 [ДатаОкончания]
					,_Fld4359 [ПроцентAКласса]
					,_Fld4360 [ПроцентBКласса]
					,_Fld4361 [ПроцентCКласса]
					,_Fld4362 [Комментарий]
					,_Fld4363RRef [Ответственный]
					From _Document297(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ABCКлассификацияПокупателей();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ABCКлассификацияПокупателей();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ДатаНачала = Читалка.GetDateTime(3);
							Ссылка.ДатаОкончания = Читалка.GetDateTime(4);
							Ссылка.ПроцентAКласса = Читалка.GetDecimal(5);
							Ссылка.ПроцентBКласса = Читалка.GetDecimal(6);
							Ссылка.ПроцентCКласса = Читалка.GetDecimal(7);
							Ссылка.Комментарий = Читалка.GetString(8);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ABCКлассификацияПокупателей СтраницаПоНомеру(int Размер,int Номер)
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
					,_Fld4357 [ДатаНачала]
					,_Fld4358 [ДатаОкончания]
					,_Fld4359 [ПроцентAКласса]
					,_Fld4360 [ПроцентBКласса]
					,_Fld4361 [ПроцентCКласса]
					,_Fld4362 [Комментарий]
					,_Fld4363RRef [Ответственный]
					From _Document297(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ABCКлассификацияПокупателей();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ABCКлассификацияПокупателей();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ДатаНачала = Читалка.GetDateTime(3);
							Ссылка.ДатаОкончания = Читалка.GetDateTime(4);
							Ссылка.ПроцентAКласса = Читалка.GetDecimal(5);
							Ссылка.ПроцентBКласса = Читалка.GetDecimal(6);
							Ссылка.ПроцентCКласса = Читалка.GetDecimal(7);
							Ссылка.Комментарий = Читалка.GetString(8);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.ДокументыОбъект.ABCКлассификацияПокупателей СоздатьЭлемент()
		{
			var Объект = new V82.ДокументыОбъект.ABCКлассификацияПокупателей();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.Комментарий = "";
			return Объект;
		}
	}
}