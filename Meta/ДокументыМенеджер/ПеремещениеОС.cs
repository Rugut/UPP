
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
	///(Общ)
	///</summary>
	public partial class ПеремещениеОС:ДокументМенеджер
	{
		
		public static ДокументыСсылка.ПеремещениеОС НайтиПоСсылке(Guid _Ссылка)
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
					,_Fld12417RRef [Организация]
					,_Fld12418RRef [МОЛ]
					,_Fld12419 [Комментарий]
					,_Fld12420RRef [Ответственный]
					,_Fld12421RRef [ПодразделениеОрганизации]
					,_Fld12422 [ОтражатьВБухгалтерскомУчете]
					,_Fld12423 [ОтражатьВУправленческомУчете]
					,_Fld12424RRef [Подразделение]
					,_Fld12425RRef [МОЛОрганизации]
					,_Fld12426RRef [Событие]
					,_Fld12427RRef [СобытиеРегл]
					From _Document491(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПеремещениеОС();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(8))[0]==1;
							Ссылка.ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(9))[0]==1;
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
		
		public static ДокументыСсылка.ПеремещениеОС НайтиПоНомеру(string Номер)
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
					,_Fld12417RRef [Организация]
					,_Fld12418RRef [МОЛ]
					,_Fld12419 [Комментарий]
					,_Fld12420RRef [Ответственный]
					,_Fld12421RRef [ПодразделениеОрганизации]
					,_Fld12422 [ОтражатьВБухгалтерскомУчете]
					,_Fld12423 [ОтражатьВУправленческомУчете]
					,_Fld12424RRef [Подразделение]
					,_Fld12425RRef [МОЛОрганизации]
					,_Fld12426RRef [Событие]
					,_Fld12427RRef [СобытиеРегл]
					From _Document491(NOLOCK)
					Where _Number = @Номер";
					Команда.Parameters.AddWithValue("Номер", Номер);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПеремещениеОС();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(8))[0]==1;
							Ссылка.ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(9))[0]==1;
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
		
		public static ДокументыВыборка.ПеремещениеОС Выбрать()
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
					,_Fld12417RRef [Организация]
					,_Fld12418RRef [МОЛ]
					,_Fld12419 [Комментарий]
					,_Fld12420RRef [Ответственный]
					,_Fld12421RRef [ПодразделениеОрганизации]
					,_Fld12422 [ОтражатьВБухгалтерскомУчете]
					,_Fld12423 [ОтражатьВУправленческомУчете]
					,_Fld12424RRef [Подразделение]
					,_Fld12425RRef [МОЛОрганизации]
					,_Fld12426RRef [Событие]
					,_Fld12427RRef [СобытиеРегл]
					From _Document491(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ПеремещениеОС();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПеремещениеОС();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(8))[0]==1;
							Ссылка.ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(9))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ПеремещениеОС ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
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
					,_Fld12417RRef [Организация]
					,_Fld12418RRef [МОЛ]
					,_Fld12419 [Комментарий]
					,_Fld12420RRef [Ответственный]
					,_Fld12421RRef [ПодразделениеОрганизации]
					,_Fld12422 [ОтражатьВБухгалтерскомУчете]
					,_Fld12423 [ОтражатьВУправленческомУчете]
					,_Fld12424RRef [Подразделение]
					,_Fld12425RRef [МОЛОрганизации]
					,_Fld12426RRef [Событие]
					,_Fld12427RRef [СобытиеРегл]
					From _Document491(NOLOCK)
					Where _IDRRef between @Мин and @Макс
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ПеремещениеОС();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПеремещениеОС();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(8))[0]==1;
							Ссылка.ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(9))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ПеремещениеОС ВыбратьПоНомеру(int Первые,string Мин,string Макс)
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
					,_Fld12417RRef [Организация]
					,_Fld12418RRef [МОЛ]
					,_Fld12419 [Комментарий]
					,_Fld12420RRef [Ответственный]
					,_Fld12421RRef [ПодразделениеОрганизации]
					,_Fld12422 [ОтражатьВБухгалтерскомУчете]
					,_Fld12423 [ОтражатьВУправленческомУчете]
					,_Fld12424RRef [Подразделение]
					,_Fld12425RRef [МОЛОрганизации]
					,_Fld12426RRef [Событие]
					,_Fld12427RRef [СобытиеРегл]
					From _Document491(NOLOCK)
					Where _Code between @Мин and @Макс
					Order by _Code", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ПеремещениеОС();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПеремещениеОС();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(8))[0]==1;
							Ссылка.ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(9))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ПеремещениеОС СтраницаПоСсылке(int Размер,int Номер)
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
					,_Fld12417RRef [Организация]
					,_Fld12418RRef [МОЛ]
					,_Fld12419 [Комментарий]
					,_Fld12420RRef [Ответственный]
					,_Fld12421RRef [ПодразделениеОрганизации]
					,_Fld12422 [ОтражатьВБухгалтерскомУчете]
					,_Fld12423 [ОтражатьВУправленческомУчете]
					,_Fld12424RRef [Подразделение]
					,_Fld12425RRef [МОЛОрганизации]
					,_Fld12426RRef [Событие]
					,_Fld12427RRef [СобытиеРегл]
					From _Document491(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ПеремещениеОС();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПеремещениеОС();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(8))[0]==1;
							Ссылка.ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(9))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ПеремещениеОС СтраницаПоНомеру(int Размер,int Номер)
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
					,_Fld12417RRef [Организация]
					,_Fld12418RRef [МОЛ]
					,_Fld12419 [Комментарий]
					,_Fld12420RRef [Ответственный]
					,_Fld12421RRef [ПодразделениеОрганизации]
					,_Fld12422 [ОтражатьВБухгалтерскомУчете]
					,_Fld12423 [ОтражатьВУправленческомУчете]
					,_Fld12424RRef [Подразделение]
					,_Fld12425RRef [МОЛОрганизации]
					,_Fld12426RRef [Событие]
					,_Fld12427RRef [СобытиеРегл]
					From _Document491(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ПеремещениеОС();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПеремещениеОС();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(8))[0]==1;
							Ссылка.ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(9))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.ДокументыОбъект.ПеремещениеОС СоздатьЭлемент()
		{
			var Объект = new V82.ДокументыОбъект.ПеремещениеОС();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.Комментарий = "";
			return Объект;
		}
	}
}