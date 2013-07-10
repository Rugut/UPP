
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
	public partial class КорректировкаВнутреннегоЗаказа:ДокументМенеджер
	{
		
		public static ДокументыСсылка.КорректировкаВнутреннегоЗаказа НайтиПоСсылке(Guid _Ссылка)
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
					,_Fld19487RRef [Организация]
					,_Fld5574 [Комментарий]
					,_Fld5575RRef [Ответственный]
					,_Fld5576RRef [Подразделение]
					,_Fld5577RRef [ВнутреннийЗаказ]
					From _Document302(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.КорректировкаВнутреннегоЗаказа();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(4);
							Ссылка.ВнутреннийЗаказ = V82.ДокументыСсылка.ВнутреннийЗаказ.ВзятьИзКэша((byte[])Читалка.GetValue(7));
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
		
		public static ДокументыСсылка.КорректировкаВнутреннегоЗаказа НайтиПоНомеру(string Номер)
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
					,_Fld19487RRef [Организация]
					,_Fld5574 [Комментарий]
					,_Fld5575RRef [Ответственный]
					,_Fld5576RRef [Подразделение]
					,_Fld5577RRef [ВнутреннийЗаказ]
					From _Document302(NOLOCK)
					Where _Number = @Номер";
					Команда.Parameters.AddWithValue("Номер", Номер);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.КорректировкаВнутреннегоЗаказа();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(4);
							Ссылка.ВнутреннийЗаказ = V82.ДокументыСсылка.ВнутреннийЗаказ.ВзятьИзКэша((byte[])Читалка.GetValue(7));
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
		
		public static ДокументыВыборка.КорректировкаВнутреннегоЗаказа Выбрать()
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
					,_Fld19487RRef [Организация]
					,_Fld5574 [Комментарий]
					,_Fld5575RRef [Ответственный]
					,_Fld5576RRef [Подразделение]
					,_Fld5577RRef [ВнутреннийЗаказ]
					From _Document302(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.КорректировкаВнутреннегоЗаказа();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.КорректировкаВнутреннегоЗаказа();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(4);
							Ссылка.ВнутреннийЗаказ = V82.ДокументыСсылка.ВнутреннийЗаказ.ВзятьИзКэша((byte[])Читалка.GetValue(7));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.КорректировкаВнутреннегоЗаказа ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
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
					,_Fld19487RRef [Организация]
					,_Fld5574 [Комментарий]
					,_Fld5575RRef [Ответственный]
					,_Fld5576RRef [Подразделение]
					,_Fld5577RRef [ВнутреннийЗаказ]
					From _Document302(NOLOCK)
					Where _IDRRef between @Мин and @Макс
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.КорректировкаВнутреннегоЗаказа();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.КорректировкаВнутреннегоЗаказа();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(4);
							Ссылка.ВнутреннийЗаказ = V82.ДокументыСсылка.ВнутреннийЗаказ.ВзятьИзКэша((byte[])Читалка.GetValue(7));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.КорректировкаВнутреннегоЗаказа ВыбратьПоНомеру(int Первые,string Мин,string Макс)
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
					,_Fld19487RRef [Организация]
					,_Fld5574 [Комментарий]
					,_Fld5575RRef [Ответственный]
					,_Fld5576RRef [Подразделение]
					,_Fld5577RRef [ВнутреннийЗаказ]
					From _Document302(NOLOCK)
					Where _Code between @Мин and @Макс
					Order by _Code", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.КорректировкаВнутреннегоЗаказа();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.КорректировкаВнутреннегоЗаказа();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(4);
							Ссылка.ВнутреннийЗаказ = V82.ДокументыСсылка.ВнутреннийЗаказ.ВзятьИзКэша((byte[])Читалка.GetValue(7));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.КорректировкаВнутреннегоЗаказа СтраницаПоСсылке(int Размер,int Номер)
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
					,_Fld19487RRef [Организация]
					,_Fld5574 [Комментарий]
					,_Fld5575RRef [Ответственный]
					,_Fld5576RRef [Подразделение]
					,_Fld5577RRef [ВнутреннийЗаказ]
					From _Document302(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.КорректировкаВнутреннегоЗаказа();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.КорректировкаВнутреннегоЗаказа();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(4);
							Ссылка.ВнутреннийЗаказ = V82.ДокументыСсылка.ВнутреннийЗаказ.ВзятьИзКэша((byte[])Читалка.GetValue(7));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.КорректировкаВнутреннегоЗаказа СтраницаПоНомеру(int Размер,int Номер)
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
					,_Fld19487RRef [Организация]
					,_Fld5574 [Комментарий]
					,_Fld5575RRef [Ответственный]
					,_Fld5576RRef [Подразделение]
					,_Fld5577RRef [ВнутреннийЗаказ]
					From _Document302(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.КорректировкаВнутреннегоЗаказа();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.КорректировкаВнутреннегоЗаказа();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(4);
							Ссылка.ВнутреннийЗаказ = V82.ДокументыСсылка.ВнутреннийЗаказ.ВзятьИзКэша((byte[])Читалка.GetValue(7));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.ДокументыОбъект.КорректировкаВнутреннегоЗаказа СоздатьЭлемент()
		{
			var Объект = new V82.ДокументыОбъект.КорректировкаВнутреннегоЗаказа();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.Комментарий = "";
			Объект.ВнутреннийЗаказ = new V82.ДокументыСсылка.ВнутреннийЗаказ();
			return Объект;
		}
	}
}