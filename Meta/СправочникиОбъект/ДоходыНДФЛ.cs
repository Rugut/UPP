
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
	///(Регл)
	///</summary>
	public partial class ДоходыНДФЛ:СправочникОбъект
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
		public string/*20*/ Код;
		public string/*150*/ Наименование;
		public V82.Перечисления/*Ссылка*/.НДФЛСтавкиНалогообложенияРезидента СтавкаНалогообложенияРезидента;//Ставка налогообложения резидента
		public string/*(4)*/ КодДляОтчетности;//Код для отчетности
		public bool НеОблагаетсяУНалоговогоАгента;//Не облагается у налогового агента
		public bool НеОтражаетсяВОтчетности2010;//Не отражается в отчетности-2010
		public bool УчитыватьПоПериодуДействия;//Учитывать по периоду действия
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
						Insert Into _Reference95(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld2297RRef
						,_Fld2298
						,_Fld2299
						,_Fld2300
						,_Fld2301)
						Values (
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@СтавкаНалогообложенияРезидента
						,@КодДляОтчетности
						,@НеОблагаетсяУНалоговогоАгента
						,@НеОтражаетсяВОтчетности2010
						,@УчитыватьПоПериодуДействия)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference95
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld2297RRef	= @СтавкаНалогообложенияРезидента
						,_Fld2298	= @КодДляОтчетности
						,_Fld2299	= @НеОблагаетсяУНалоговогоАгента
						,_Fld2300	= @НеОтражаетсяВОтчетности2010
						,_Fld2301	= @УчитыватьПоПериодуДействия
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("СтавкаНалогообложенияРезидента", СтавкаНалогообложенияРезидента.Ключ());
					Команда.Parameters.AddWithValue("КодДляОтчетности", КодДляОтчетности);
					Команда.Parameters.AddWithValue("НеОблагаетсяУНалоговогоАгента", НеОблагаетсяУНалоговогоАгента);
					Команда.Parameters.AddWithValue("НеОтражаетсяВОтчетности2010", НеОтражаетсяВОтчетности2010);
					Команда.Parameters.AddWithValue("УчитыватьПоПериодуДействия", УчитыватьПоПериодуДействия);
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
					Команда.CommandText = @"Delete _Reference95
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}
