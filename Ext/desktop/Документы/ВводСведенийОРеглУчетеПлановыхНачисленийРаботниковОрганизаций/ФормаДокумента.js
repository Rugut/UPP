Ext.define('Документы.ВводСведенийОРеглУчетеПлановыхНачисленийРаботниковОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 366,width: 643,
	iconCls: 'bogus',
	title: 'Ввод сведений о регламентированном учете плановых начислений сотрудников организации',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:89px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:189px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:89px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснование',
			style: 'position:absolute;left:415px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:89px;top:314px;width:546px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:415px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:627px;height:24px;',
			items:
			[
				{
					text:'Действие11',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие13',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие17',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие10',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:124px;width:627px;height:184px;',
			height: 184,width: 627,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ТабельныйНомерСтрока',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'ВидРасчета',
				},
				{
					text:'ДатаНачала',
				},
				{
					text:'СпособОтраженияВБухучете',
				},
				{
					text:'КодДоходаЕСН',
				},
				{
					text:'ОтнесениеРасходовКДеятельностиЕНВД',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:643px;height:25px;',
			items:
			[
				{
					text:'ВводСведенийОПлановыхНачисленияхРаботниковОрганизаций',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СписокРаботников',
				},
				{
					text:'ПриемНаРаботуВОрганизацию',
				},
				{
					text:'Разделитель',
				},
				{
					text:'КадровоеПеремещениеОрганизаций',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ЗаполнитьПоДокументу',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Подменю2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:341px;width:643px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});