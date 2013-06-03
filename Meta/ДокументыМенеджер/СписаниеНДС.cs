
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
	///Списание НДС предъявленного на расходы
	///</summary>
	public partial class СписаниеНДС:ДокументМенеджер
	{
		
		public static ДокументыСсылка.СписаниеНДС НайтиПоСсылке(Guid _Ссылка)
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
					,_Fld17301RRef [Организация]
					,_Fld17302RRef [Ответственный]
					,_Fld17303 [Комментарий]
					,_Fld17304 [ОтражатьВНалоговомУчете]
					,_Fld17305RRef [СчетСписанияНДС]
					,_Fld17306RRef [СубконтоСписанияНДС1]
					,_Fld17307RRef [СубконтоСписанияНДС2]
					,_Fld17308RRef [СубконтоСписанияНДС3]
					,_Fld17309RRef [СчетСписанияНДСНУ]
					,_Fld17310RRef [СубконтоСписанияНДСНУ1]
					,_Fld17311RRef [СубконтоСписанияНДСНУ2]
					,_Fld17312RRef [СубконтоСписанияНДСНУ3]
					From _Document592(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.СписаниеНДС();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(6))[0]==1;
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
		
		public static ДокументыСсылка.СписаниеНДС НайтиПоНомеру(string Номер)
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
					,_Fld17301RRef [Организация]
					,_Fld17302RRef [Ответственный]
					,_Fld17303 [Комментарий]
					,_Fld17304 [ОтражатьВНалоговомУчете]
					,_Fld17305RRef [СчетСписанияНДС]
					,_Fld17306RRef [СубконтоСписанияНДС1]
					,_Fld17307RRef [СубконтоСписанияНДС2]
					,_Fld17308RRef [СубконтоСписанияНДС3]
					,_Fld17309RRef [СчетСписанияНДСНУ]
					,_Fld17310RRef [СубконтоСписанияНДСНУ1]
					,_Fld17311RRef [СубконтоСписанияНДСНУ2]
					,_Fld17312RRef [СубконтоСписанияНДСНУ3]
					From _Document592(NOLOCK)
					Where _Number = @Номер";
					Команда.Parameters.AddWithValue("Номер", Номер);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.СписаниеНДС();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(6))[0]==1;
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
		
		public static ДокументыВыборка.СписаниеНДС Выбрать()
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
					,_Fld17301RRef [Организация]
					,_Fld17302RRef [Ответственный]
					,_Fld17303 [Комментарий]
					,_Fld17304 [ОтражатьВНалоговомУчете]
					,_Fld17305RRef [СчетСписанияНДС]
					,_Fld17306RRef [СубконтоСписанияНДС1]
					,_Fld17307RRef [СубконтоСписанияНДС2]
					,_Fld17308RRef [СубконтоСписанияНДС3]
					,_Fld17309RRef [СчетСписанияНДСНУ]
					,_Fld17310RRef [СубконтоСписанияНДСНУ1]
					,_Fld17311RRef [СубконтоСписанияНДСНУ2]
					,_Fld17312RRef [СубконтоСписанияНДСНУ3]
					From _Document592(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.СписаниеНДС();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.СписаниеНДС();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(6))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.СписаниеНДС ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
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
					,_Fld17301RRef [Организация]
					,_Fld17302RRef [Ответственный]
					,_Fld17303 [Комментарий]
					,_Fld17304 [ОтражатьВНалоговомУчете]
					,_Fld17305RRef [СчетСписанияНДС]
					,_Fld17306RRef [СубконтоСписанияНДС1]
					,_Fld17307RRef [СубконтоСписанияНДС2]
					,_Fld17308RRef [СубконтоСписанияНДС3]
					,_Fld17309RRef [СчетСписанияНДСНУ]
					,_Fld17310RRef [СубконтоСписанияНДСНУ1]
					,_Fld17311RRef [СубконтоСписанияНДСНУ2]
					,_Fld17312RRef [СубконтоСписанияНДСНУ3]
					From _Document592(NOLOCK)
					Where _IDRRef between @Мин and @Макс
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.СписаниеНДС();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.СписаниеНДС();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(6))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.СписаниеНДС ВыбратьПоНомеру(int Первые,string Мин,string Макс)
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
					,_Fld17301RRef [Организация]
					,_Fld17302RRef [Ответственный]
					,_Fld17303 [Комментарий]
					,_Fld17304 [ОтражатьВНалоговомУчете]
					,_Fld17305RRef [СчетСписанияНДС]
					,_Fld17306RRef [СубконтоСписанияНДС1]
					,_Fld17307RRef [СубконтоСписанияНДС2]
					,_Fld17308RRef [СубконтоСписанияНДС3]
					,_Fld17309RRef [СчетСписанияНДСНУ]
					,_Fld17310RRef [СубконтоСписанияНДСНУ1]
					,_Fld17311RRef [СубконтоСписанияНДСНУ2]
					,_Fld17312RRef [СубконтоСписанияНДСНУ3]
					From _Document592(NOLOCK)
					Where _Code between @Мин and @Макс
					Order by _Code", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.СписаниеНДС();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.СписаниеНДС();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(6))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.СписаниеНДС СтраницаПоСсылке(int Размер,int Номер)
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
					,_Fld17301RRef [Организация]
					,_Fld17302RRef [Ответственный]
					,_Fld17303 [Комментарий]
					,_Fld17304 [ОтражатьВНалоговомУчете]
					,_Fld17305RRef [СчетСписанияНДС]
					,_Fld17306RRef [СубконтоСписанияНДС1]
					,_Fld17307RRef [СубконтоСписанияНДС2]
					,_Fld17308RRef [СубконтоСписанияНДС3]
					,_Fld17309RRef [СчетСписанияНДСНУ]
					,_Fld17310RRef [СубконтоСписанияНДСНУ1]
					,_Fld17311RRef [СубконтоСписанияНДСНУ2]
					,_Fld17312RRef [СубконтоСписанияНДСНУ3]
					From _Document592(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.СписаниеНДС();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.СписаниеНДС();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(6))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.СписаниеНДС СтраницаПоНомеру(int Размер,int Номер)
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
					,_Fld17301RRef [Организация]
					,_Fld17302RRef [Ответственный]
					,_Fld17303 [Комментарий]
					,_Fld17304 [ОтражатьВНалоговомУчете]
					,_Fld17305RRef [СчетСписанияНДС]
					,_Fld17306RRef [СубконтоСписанияНДС1]
					,_Fld17307RRef [СубконтоСписанияНДС2]
					,_Fld17308RRef [СубконтоСписанияНДС3]
					,_Fld17309RRef [СчетСписанияНДСНУ]
					,_Fld17310RRef [СубконтоСписанияНДСНУ1]
					,_Fld17311RRef [СубконтоСписанияНДСНУ2]
					,_Fld17312RRef [СубконтоСписанияНДСНУ3]
					From _Document592(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.СписаниеНДС();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.СписаниеНДС();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(5);
							Ссылка.ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(6))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.ДокументыОбъект.СписаниеНДС СоздатьЭлемент()
		{
			var Объект = new V82.ДокументыОбъект.СписаниеНДС();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.Комментарий = "";
			return Объект;
		}
	}
}