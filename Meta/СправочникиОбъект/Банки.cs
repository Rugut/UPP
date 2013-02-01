
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
	///(Общ) Классификатор банков
	///</summary>
	public partial class Банки:СправочникОбъект
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
		///(Регл) Корреспондентский счет банка
		///</summary>
		public string/*(20)*/ КоррСчет;//Корр. счет
		///<summary>
		///(Общ)
		///</summary>
		public string/*(50)*/ Город;
		///<summary>
		///(Общ)
		///</summary>
		public string/*(0)*/ Адрес;
		///<summary>
		///(Общ)
		///</summary>
		public string/*(0)*/ Телефоны;
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
						Insert Into _Reference35(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_ParentIDRRef
						,_Folder
						,_Code
						,_Description
						,_Fld1847
						,_Fld1848
						,_Fld1849
						,_Fld1850)
						Values (
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Родитель
						,@ЭтоГруппа
						,@Код
						,@Наименование
						,@КоррСчет
						,@Город
						,@Адрес
						,@Телефоны)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference35
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_ParentIDRRef	= @Родитель
						,_Folder	= @ЭтоГруппа
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld1847	= @КоррСчет
						,_Fld1848	= @Город
						,_Fld1849	= @Адрес
						,_Fld1850	= @Телефоны
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
					Команда.Parameters.AddWithValue("КоррСчет", КоррСчет);
					Команда.Parameters.AddWithValue("Город", Город);
					Команда.Parameters.AddWithValue("Адрес", Адрес);
					Команда.Parameters.AddWithValue("Телефоны", Телефоны);
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
					Команда.CommandText = @"Delete _Reference35
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
		/*МодульОбъекта*/

		public void ПередЗаписью(/*Отказ*/)
		{
			if(true/*НЕ ЭтоГруппа И НЕ ОбменДанными.Загрузка*/)
			{
				/*СтрокаОшибки = "Элемент справочника ""Банки"" " + Наименование + " не записан!";*/
				if(true/*НЕ ОбщегоНазначения.ТолькоЦифрыВСтроке(КоррСчет)*/)
				{
					/*ОбщегоНазначения.СообщитьОбОшибке("В составе Корр.счета банка должны быть только цифры без пробелов.",, СтрокаОшибки);*/
					/*Отказ = Истина;*/
				}
				if(true/*НЕ ОбщегоНазначения.ТолькоЦифрыВСтроке(Код)*/)
				{
					/*ОбщегоНазначения.СообщитьОбОшибке("В составе БИК банка должны быть только цифры без пробелов.",, СтрокаОшибки);*/
					/*Отказ = Истина;*/
				}
			}
		}
	}
}
