
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
	public partial class Доверенность:ДокументМенеджер
	{
		
		public static ДокументыСсылка.Доверенность НайтиПоСсылке(Guid _Ссылка)
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
					,_Fld6802RRef [Организация]
					,_Fld6803RRef [ФизЛицо]
					,_Fld6804RRef [БанковскийСчетОрганизации]
					,_Fld6805RRef [Контрагент]
					,_Fld6806RRef [ДоговорКонтрагента]
					,_Fld6807_TYPE [Сделка_Тип],_Fld6807_RRRef [Сделка],_Fld6807_RTRef [Сделка_Вид]
					,_Fld6808 [ДатаДействия]
					,_Fld6809 [НаПолучениеОт]
					,_Fld6810 [ПоДокументу]
					,_Fld6811RRef [Подразделение]
					,_Fld6812 [Комментарий]
					,_Fld6813RRef [Ответственный]
					From _Document355(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.Доверенность();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ДатаДействия = Читалка.GetDateTime(11);
							Ссылка.НаПолучениеОт = Читалка.GetString(12);
							Ссылка.ПоДокументу = Читалка.GetString(13);
							Ссылка.Комментарий = Читалка.GetString(15);
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
		
		public static ДокументыСсылка.Доверенность НайтиПоНомеру(string Номер)
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
					,_Fld6802RRef [Организация]
					,_Fld6803RRef [ФизЛицо]
					,_Fld6804RRef [БанковскийСчетОрганизации]
					,_Fld6805RRef [Контрагент]
					,_Fld6806RRef [ДоговорКонтрагента]
					,_Fld6807_TYPE [Сделка_Тип],_Fld6807_RRRef [Сделка],_Fld6807_RTRef [Сделка_Вид]
					,_Fld6808 [ДатаДействия]
					,_Fld6809 [НаПолучениеОт]
					,_Fld6810 [ПоДокументу]
					,_Fld6811RRef [Подразделение]
					,_Fld6812 [Комментарий]
					,_Fld6813RRef [Ответственный]
					From _Document355(NOLOCK)
					Where _Number = @Номер";
					Команда.Parameters.AddWithValue("Номер", Номер);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.Доверенность();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ДатаДействия = Читалка.GetDateTime(11);
							Ссылка.НаПолучениеОт = Читалка.GetString(12);
							Ссылка.ПоДокументу = Читалка.GetString(13);
							Ссылка.Комментарий = Читалка.GetString(15);
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
		
		public static ДокументыВыборка.Доверенность Выбрать()
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
					,_Fld6802RRef [Организация]
					,_Fld6803RRef [ФизЛицо]
					,_Fld6804RRef [БанковскийСчетОрганизации]
					,_Fld6805RRef [Контрагент]
					,_Fld6806RRef [ДоговорКонтрагента]
					,_Fld6807_TYPE [Сделка_Тип],_Fld6807_RRRef [Сделка],_Fld6807_RTRef [Сделка_Вид]
					,_Fld6808 [ДатаДействия]
					,_Fld6809 [НаПолучениеОт]
					,_Fld6810 [ПоДокументу]
					,_Fld6811RRef [Подразделение]
					,_Fld6812 [Комментарий]
					,_Fld6813RRef [Ответственный]
					From _Document355(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.Доверенность();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.Доверенность();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ДатаДействия = Читалка.GetDateTime(11);
							Ссылка.НаПолучениеОт = Читалка.GetString(12);
							Ссылка.ПоДокументу = Читалка.GetString(13);
							Ссылка.Комментарий = Читалка.GetString(15);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.Доверенность ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
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
					,_Fld6802RRef [Организация]
					,_Fld6803RRef [ФизЛицо]
					,_Fld6804RRef [БанковскийСчетОрганизации]
					,_Fld6805RRef [Контрагент]
					,_Fld6806RRef [ДоговорКонтрагента]
					,_Fld6807_TYPE [Сделка_Тип],_Fld6807_RRRef [Сделка],_Fld6807_RTRef [Сделка_Вид]
					,_Fld6808 [ДатаДействия]
					,_Fld6809 [НаПолучениеОт]
					,_Fld6810 [ПоДокументу]
					,_Fld6811RRef [Подразделение]
					,_Fld6812 [Комментарий]
					,_Fld6813RRef [Ответственный]
					From _Document355(NOLOCK)
					Where _IDRRef between @Мин and @Макс
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.Доверенность();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.Доверенность();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ДатаДействия = Читалка.GetDateTime(11);
							Ссылка.НаПолучениеОт = Читалка.GetString(12);
							Ссылка.ПоДокументу = Читалка.GetString(13);
							Ссылка.Комментарий = Читалка.GetString(15);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.Доверенность ВыбратьПоНомеру(int Первые,string Мин,string Макс)
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
					,_Fld6802RRef [Организация]
					,_Fld6803RRef [ФизЛицо]
					,_Fld6804RRef [БанковскийСчетОрганизации]
					,_Fld6805RRef [Контрагент]
					,_Fld6806RRef [ДоговорКонтрагента]
					,_Fld6807_TYPE [Сделка_Тип],_Fld6807_RRRef [Сделка],_Fld6807_RTRef [Сделка_Вид]
					,_Fld6808 [ДатаДействия]
					,_Fld6809 [НаПолучениеОт]
					,_Fld6810 [ПоДокументу]
					,_Fld6811RRef [Подразделение]
					,_Fld6812 [Комментарий]
					,_Fld6813RRef [Ответственный]
					From _Document355(NOLOCK)
					Where _Code between @Мин and @Макс
					Order by _Code", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.Доверенность();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.Доверенность();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ДатаДействия = Читалка.GetDateTime(11);
							Ссылка.НаПолучениеОт = Читалка.GetString(12);
							Ссылка.ПоДокументу = Читалка.GetString(13);
							Ссылка.Комментарий = Читалка.GetString(15);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.Доверенность СтраницаПоСсылке(int Размер,int Номер)
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
					,_Fld6802RRef [Организация]
					,_Fld6803RRef [ФизЛицо]
					,_Fld6804RRef [БанковскийСчетОрганизации]
					,_Fld6805RRef [Контрагент]
					,_Fld6806RRef [ДоговорКонтрагента]
					,_Fld6807_TYPE [Сделка_Тип],_Fld6807_RRRef [Сделка],_Fld6807_RTRef [Сделка_Вид]
					,_Fld6808 [ДатаДействия]
					,_Fld6809 [НаПолучениеОт]
					,_Fld6810 [ПоДокументу]
					,_Fld6811RRef [Подразделение]
					,_Fld6812 [Комментарий]
					,_Fld6813RRef [Ответственный]
					From _Document355(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.Доверенность();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.Доверенность();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ДатаДействия = Читалка.GetDateTime(11);
							Ссылка.НаПолучениеОт = Читалка.GetString(12);
							Ссылка.ПоДокументу = Читалка.GetString(13);
							Ссылка.Комментарий = Читалка.GetString(15);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.Доверенность СтраницаПоНомеру(int Размер,int Номер)
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
					,_Fld6802RRef [Организация]
					,_Fld6803RRef [ФизЛицо]
					,_Fld6804RRef [БанковскийСчетОрганизации]
					,_Fld6805RRef [Контрагент]
					,_Fld6806RRef [ДоговорКонтрагента]
					,_Fld6807_TYPE [Сделка_Тип],_Fld6807_RRRef [Сделка],_Fld6807_RTRef [Сделка_Вид]
					,_Fld6808 [ДатаДействия]
					,_Fld6809 [НаПолучениеОт]
					,_Fld6810 [ПоДокументу]
					,_Fld6811RRef [Подразделение]
					,_Fld6812 [Комментарий]
					,_Fld6813RRef [Ответственный]
					From _Document355(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.Доверенность();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.Доверенность();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ДатаДействия = Читалка.GetDateTime(11);
							Ссылка.НаПолучениеОт = Читалка.GetString(12);
							Ссылка.ПоДокументу = Читалка.GetString(13);
							Ссылка.Комментарий = Читалка.GetString(15);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.ДокументыОбъект.Доверенность СоздатьЭлемент()
		{
			var Объект = new V82.ДокументыОбъект.Доверенность();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.НаПолучениеОт = "";
			Объект.ПоДокументу = "";
			Объект.Комментарий = "";
			return Объект;
		}
	}
}