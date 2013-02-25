
using System;
using System.Data.SqlClient;
using V82;
using V82.СправочникиСсылка;
using V82.Справочники;//Менеджер;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.Справочники//Менеджер
{
	///<summary>
	///(Регл)
	///</summary>
	public partial class ДоходыЕСН:СправочникМенеджер
	{
		
		public static СправочникиВыборка.ДоходыЕСН Выбрать()
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
					,_IsMetadata [Предопределенный]
					,_Description [Наименование]
					,_Fld2293 [ВходитВБазуФОМС]
					,_Fld2294 [ВходитВБазуФСС]
					,_Fld2295 [ВходитВБазуФедеральныйБюджет]
					From _Reference94(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.ДоходыЕСН();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ДоходыЕСН();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Наименование = Читалка.GetString(4);
							Ссылка.ВходитВБазуФОМС = ((byte[])Читалка.GetValue(5))[0]==1;
							Ссылка.ВходитВБазуФСС = ((byte[])Читалка.GetValue(6))[0]==1;
							Ссылка.ВходитВБазуФедеральныйБюджет = ((byte[])Читалка.GetValue(7))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ДоходыЕСН ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
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
					,_IsMetadata [Предопределенный]
					,_Description [Наименование]
					,_Fld2293 [ВходитВБазуФОМС]
					,_Fld2294 [ВходитВБазуФСС]
					,_Fld2295 [ВходитВБазуФедеральныйБюджет]
					From _Reference94(NOLOCK)
					Where _IDRRef between @Мин and @Макс
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.СправочникиВыборка.ДоходыЕСН();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ДоходыЕСН();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Наименование = Читалка.GetString(4);
							Ссылка.ВходитВБазуФОМС = ((byte[])Читалка.GetValue(5))[0]==1;
							Ссылка.ВходитВБазуФСС = ((byte[])Читалка.GetValue(6))[0]==1;
							Ссылка.ВходитВБазуФедеральныйБюджет = ((byte[])Читалка.GetValue(7))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ДоходыЕСН ВыбратьПоНаименованию(int Первые,string Мин,string Макс)
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
					,_IsMetadata [Предопределенный]
					,_Description [Наименование]
					,_Fld2293 [ВходитВБазуФОМС]
					,_Fld2294 [ВходитВБазуФСС]
					,_Fld2295 [ВходитВБазуФедеральныйБюджет]
					From _Reference94(NOLOCK)
					Where _Description between @Мин and @Макс
					Order by _Description", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.СправочникиВыборка.ДоходыЕСН();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ДоходыЕСН();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Наименование = Читалка.GetString(4);
							Ссылка.ВходитВБазуФОМС = ((byte[])Читалка.GetValue(5))[0]==1;
							Ссылка.ВходитВБазуФСС = ((byte[])Читалка.GetValue(6))[0]==1;
							Ссылка.ВходитВБазуФедеральныйБюджет = ((byte[])Читалка.GetValue(7))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ДоходыЕСН СтраницаПоСсылке(int Размер,int Номер)
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
					,_IsMetadata [Предопределенный]
					,_Description [Наименование]
					,_Fld2293 [ВходитВБазуФОМС]
					,_Fld2294 [ВходитВБазуФСС]
					,_Fld2295 [ВходитВБазуФедеральныйБюджет]
					From _Reference94(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.ДоходыЕСН();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ДоходыЕСН();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Наименование = Читалка.GetString(4);
							Ссылка.ВходитВБазуФОМС = ((byte[])Читалка.GetValue(5))[0]==1;
							Ссылка.ВходитВБазуФСС = ((byte[])Читалка.GetValue(6))[0]==1;
							Ссылка.ВходитВБазуФедеральныйБюджет = ((byte[])Читалка.GetValue(7))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ДоходыЕСН СтраницаПоНаименованию(int Размер,int Номер)
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
					,_IsMetadata [Предопределенный]
					,_Description [Наименование]
					,_Fld2293 [ВходитВБазуФОМС]
					,_Fld2294 [ВходитВБазуФСС]
					,_Fld2295 [ВходитВБазуФедеральныйБюджет]
					From _Reference94(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.ДоходыЕСН();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ДоходыЕСН();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Наименование = Читалка.GetString(4);
							Ссылка.ВходитВБазуФОМС = ((byte[])Читалка.GetValue(5))[0]==1;
							Ссылка.ВходитВБазуФСС = ((byte[])Читалка.GetValue(6))[0]==1;
							Ссылка.ВходитВБазуФедеральныйБюджет = ((byte[])Читалка.GetValue(7))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.СправочникиОбъект.ДоходыЕСН СоздатьЭлемент()
		{
			var Объект = new V82.СправочникиОбъект.ДоходыЕСН();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			return Объект;
		}
	}
}