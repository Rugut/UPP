
using System;
using System.Data.SqlClient;
using V82;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	///<summary>
	///(Общ)
	///</summary>
	public partial class НематериальныеАктивы:СправочникОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		public Guid Ссылка;
		public long Версия;
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления;
		public bool Предопределенный;
		public Guid Владелец;
		public bool ЭтоГруппа;
		public Guid Родитель;
		public string/*9*/ Код;
		public string/*100*/ Наименование;
		///<summary>
		///(Общ)
		///</summary>
		public string/*(0)*/ НаименованиеПолное;//Полное наименование
		///<summary>
		///(Регл)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ВидыНМА ВидНМА;//Вид НМА
		///<summary>
		///(Регл)
		///</summary>
		public V82.Перечисления/*Ссылка*/.АмортизационныеГруппы АмортизационнаяГруппа;//Амортизационная группа
		///<summary>
		///(Общ)
		///</summary>
		public string/*(0)*/ ПрочиеСведения;//Прочие сведения
		public V82.Перечисления/*Ссылка*/.ВидыОбъектовУчетаНМА ВидОбъектаУчета;//Вид объекта учета
		public void Записать()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Reference161(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_ParentIDRRef
						,_Folder
						,_Code
						,_Description
						,_Fld2898
						,_Fld2899RRef
						,_Fld2900RRef
						,_Fld2901
						,_Fld2902RRef)
						Values (
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Родитель
						,@ЭтоГруппа
						,@Код
						,@Наименование
						,@НаименованиеПолное
						,@ВидНМА
						,@АмортизационнаяГруппа
						,@ПрочиеСведения
						,@ВидОбъектаУчета)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference161
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_ParentIDRRef	= @Родитель
						,_Folder	= @ЭтоГруппа
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld2898	= @НаименованиеПолное
						,_Fld2899RRef	= @ВидНМА
						,_Fld2900RRef	= @АмортизационнаяГруппа
						,_Fld2901	= @ПрочиеСведения
						,_Fld2902RRef	= @ВидОбъектаУчета
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Родитель", Родитель);
					Команда.Parameters.AddWithValue("ЭтоГруппа", ЭтоГруппа?new byte[]{0}:new byte[]{1});
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("НаименованиеПолное", НаименованиеПолное);
					Команда.Parameters.AddWithValue("ВидНМА", ВидНМА.Ключ());
					Команда.Parameters.AddWithValue("АмортизационнаяГруппа", АмортизационнаяГруппа.Ключ());
					Команда.Parameters.AddWithValue("ПрочиеСведения", ПрочиеСведения);
					Команда.Parameters.AddWithValue("ВидОбъектаУчета", ВидОбъектаУчета.Ключ());
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Reference161
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}
