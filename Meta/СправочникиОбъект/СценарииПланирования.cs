
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
	///(Упр)
	///</summary>
	public partial class СценарииПланирования:СправочникОбъект
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
		public V82.Перечисления/*Ссылка*/.Периодичность Периодичность;
		public V82.Перечисления/*Ссылка*/.ДетализацияПланирования ДетализацияПланирования;//Детализация планирования
		public bool УчетПоСуммам;//Учет по суммам
		public bool УчетПоКоличеству;//Учет по количеству
		///<summary>
		///Валюта данных сценария
		///</summary>
		public V82.СправочникиСсылка.Валюты Валюта;
		public V82.Перечисления/*Ссылка*/.СпособыПланирования СпособПланирования;//Способ планирования
		///<summary>
		///Продолжительность цикла планирования по сценарию (в периодах планирования)
		///</summary>
		public decimal/*(10)*/ ПродолжительностьЦикла;//Продолжительность цикла
		///<summary>
		///Начало интервала планирования
		///</summary>
		public DateTime НачалоПлана;//Начало плана
		///<summary>
		///Конец интервала планирования
		///</summary>
		public DateTime КонецПлана;//Конец плана
		///<summary>
		///Годовая норма доходности для сценария
		///</summary>
		public decimal/*(6.3)*/ НормаДоходности;//Норма доходности, %
		///<summary>
		///Признак использования отдельной линейки курсов валют для сценария
		///</summary>
		public bool ИспользоватьКурсыСценария;//Использовать курсы сценария
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
						Insert Into _Reference255(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_ParentIDRRef
						,_Folder
						,_Code
						,_Description
						,_Fld3860RRef
						,_Fld3861RRef
						,_Fld3862
						,_Fld3863
						,_Fld3864RRef
						,_Fld3865RRef
						,_Fld3866
						,_Fld3867
						,_Fld3868
						,_Fld3869
						,_Fld3870)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Родитель
						,@ЭтоГруппа
						,@Код
						,@Наименование
						,@Периодичность
						,@ДетализацияПланирования
						,@УчетПоСуммам
						,@УчетПоКоличеству
						,@Валюта
						,@СпособПланирования
						,@ПродолжительностьЦикла
						,@НачалоПлана
						,@КонецПлана
						,@НормаДоходности
						,@ИспользоватьКурсыСценария)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference255
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_ParentIDRRef	= @Родитель
						,_Folder	= @ЭтоГруппа
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld3860RRef	= @Периодичность
						,_Fld3861RRef	= @ДетализацияПланирования
						,_Fld3862	= @УчетПоСуммам
						,_Fld3863	= @УчетПоКоличеству
						,_Fld3864RRef	= @Валюта
						,_Fld3865RRef	= @СпособПланирования
						,_Fld3866	= @ПродолжительностьЦикла
						,_Fld3867	= @НачалоПлана
						,_Fld3868	= @КонецПлана
						,_Fld3869	= @НормаДоходности
						,_Fld3870	= @ИспользоватьКурсыСценария
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
					Команда.Parameters.AddWithValue("Периодичность", Периодичность.Ключ());
					Команда.Parameters.AddWithValue("ДетализацияПланирования", ДетализацияПланирования.Ключ());
					Команда.Parameters.AddWithValue("УчетПоСуммам", УчетПоСуммам);
					Команда.Parameters.AddWithValue("УчетПоКоличеству", УчетПоКоличеству);
					Команда.Parameters.AddWithValue("Валюта", Валюта.Ссылка);
					Команда.Parameters.AddWithValue("СпособПланирования", СпособПланирования.Ключ());
					Команда.Parameters.AddWithValue("ПродолжительностьЦикла", ПродолжительностьЦикла);
					Команда.Parameters.AddWithValue("НачалоПлана", НачалоПлана);
					Команда.Parameters.AddWithValue("КонецПлана", КонецПлана);
					Команда.Parameters.AddWithValue("НормаДоходности", НормаДоходности);
					Команда.Parameters.AddWithValue("ИспользоватьКурсыСценария", ИспользоватьКурсыСценария);
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
					Команда.CommandText = @"Delete _Reference255
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}