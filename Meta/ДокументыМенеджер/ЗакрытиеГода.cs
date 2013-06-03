
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
	public partial class ЗакрытиеГода:ДокументМенеджер
	{
		
		public static ДокументыСсылка.ЗакрытиеГода НайтиПоСсылке(Guid _Ссылка)
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
					,_Fld7205RRef [Организация]
					,_Fld7206 [ПериодРегистрации]
					,_Fld7207RRef [Ответственный]
					,_Fld7208 [Комментарий]
					,_Fld7209 [РеформацияБалансаБУ]
					,_Fld7210 [ЗакрытиеСчетовНУ]
					From _Document365(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ЗакрытиеГода();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ПериодРегистрации = Читалка.GetDateTime(4);
							Ссылка.Комментарий = Читалка.GetString(6);
							Ссылка.РеформацияБалансаБУ = ((byte[])Читалка.GetValue(7))[0]==1;
							Ссылка.ЗакрытиеСчетовНУ = ((byte[])Читалка.GetValue(8))[0]==1;
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
		
		public static ДокументыСсылка.ЗакрытиеГода НайтиПоНомеру(string Номер)
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
					,_Fld7205RRef [Организация]
					,_Fld7206 [ПериодРегистрации]
					,_Fld7207RRef [Ответственный]
					,_Fld7208 [Комментарий]
					,_Fld7209 [РеформацияБалансаБУ]
					,_Fld7210 [ЗакрытиеСчетовНУ]
					From _Document365(NOLOCK)
					Where _Number = @Номер";
					Команда.Parameters.AddWithValue("Номер", Номер);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ЗакрытиеГода();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ПериодРегистрации = Читалка.GetDateTime(4);
							Ссылка.Комментарий = Читалка.GetString(6);
							Ссылка.РеформацияБалансаБУ = ((byte[])Читалка.GetValue(7))[0]==1;
							Ссылка.ЗакрытиеСчетовНУ = ((byte[])Читалка.GetValue(8))[0]==1;
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
		
		public static ДокументыВыборка.ЗакрытиеГода Выбрать()
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
					,_Fld7205RRef [Организация]
					,_Fld7206 [ПериодРегистрации]
					,_Fld7207RRef [Ответственный]
					,_Fld7208 [Комментарий]
					,_Fld7209 [РеформацияБалансаБУ]
					,_Fld7210 [ЗакрытиеСчетовНУ]
					From _Document365(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ЗакрытиеГода();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ЗакрытиеГода();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ПериодРегистрации = Читалка.GetDateTime(4);
							Ссылка.Комментарий = Читалка.GetString(6);
							Ссылка.РеформацияБалансаБУ = ((byte[])Читалка.GetValue(7))[0]==1;
							Ссылка.ЗакрытиеСчетовНУ = ((byte[])Читалка.GetValue(8))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ЗакрытиеГода ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
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
					,_Fld7205RRef [Организация]
					,_Fld7206 [ПериодРегистрации]
					,_Fld7207RRef [Ответственный]
					,_Fld7208 [Комментарий]
					,_Fld7209 [РеформацияБалансаБУ]
					,_Fld7210 [ЗакрытиеСчетовНУ]
					From _Document365(NOLOCK)
					Where _IDRRef between @Мин and @Макс
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ЗакрытиеГода();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ЗакрытиеГода();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ПериодРегистрации = Читалка.GetDateTime(4);
							Ссылка.Комментарий = Читалка.GetString(6);
							Ссылка.РеформацияБалансаБУ = ((byte[])Читалка.GetValue(7))[0]==1;
							Ссылка.ЗакрытиеСчетовНУ = ((byte[])Читалка.GetValue(8))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ЗакрытиеГода ВыбратьПоНомеру(int Первые,string Мин,string Макс)
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
					,_Fld7205RRef [Организация]
					,_Fld7206 [ПериодРегистрации]
					,_Fld7207RRef [Ответственный]
					,_Fld7208 [Комментарий]
					,_Fld7209 [РеформацияБалансаБУ]
					,_Fld7210 [ЗакрытиеСчетовНУ]
					From _Document365(NOLOCK)
					Where _Code between @Мин and @Макс
					Order by _Code", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ЗакрытиеГода();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ЗакрытиеГода();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ПериодРегистрации = Читалка.GetDateTime(4);
							Ссылка.Комментарий = Читалка.GetString(6);
							Ссылка.РеформацияБалансаБУ = ((byte[])Читалка.GetValue(7))[0]==1;
							Ссылка.ЗакрытиеСчетовНУ = ((byte[])Читалка.GetValue(8))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ЗакрытиеГода СтраницаПоСсылке(int Размер,int Номер)
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
					,_Fld7205RRef [Организация]
					,_Fld7206 [ПериодРегистрации]
					,_Fld7207RRef [Ответственный]
					,_Fld7208 [Комментарий]
					,_Fld7209 [РеформацияБалансаБУ]
					,_Fld7210 [ЗакрытиеСчетовНУ]
					From _Document365(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ЗакрытиеГода();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ЗакрытиеГода();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ПериодРегистрации = Читалка.GetDateTime(4);
							Ссылка.Комментарий = Читалка.GetString(6);
							Ссылка.РеформацияБалансаБУ = ((byte[])Читалка.GetValue(7))[0]==1;
							Ссылка.ЗакрытиеСчетовНУ = ((byte[])Читалка.GetValue(8))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ЗакрытиеГода СтраницаПоНомеру(int Размер,int Номер)
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
					,_Fld7205RRef [Организация]
					,_Fld7206 [ПериодРегистрации]
					,_Fld7207RRef [Ответственный]
					,_Fld7208 [Комментарий]
					,_Fld7209 [РеформацияБалансаБУ]
					,_Fld7210 [ЗакрытиеСчетовНУ]
					From _Document365(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ЗакрытиеГода();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ЗакрытиеГода();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ПериодРегистрации = Читалка.GetDateTime(4);
							Ссылка.Комментарий = Читалка.GetString(6);
							Ссылка.РеформацияБалансаБУ = ((byte[])Читалка.GetValue(7))[0]==1;
							Ссылка.ЗакрытиеСчетовНУ = ((byte[])Читалка.GetValue(8))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.ДокументыОбъект.ЗакрытиеГода СоздатьЭлемент()
		{
			var Объект = new V82.ДокументыОбъект.ЗакрытиеГода();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.Комментарий = "";
			return Объект;
		}
	}
}