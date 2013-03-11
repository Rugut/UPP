Ext.define('Документы.ВводСведенийОПлановыхУдержанияхРаботниковОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 477,width: 620,
	iconCls: 'bogus',
	title: 'Ввод сведений о плановых удержаниях сотрудников организации',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:52px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:152px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:392px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:425px;width:518px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:240px;width:604px;height:24px;',
			items:
			[
				{
					text:'Действие10',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие13',
				},
				{
					text:'ВсеРаботники',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие9',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие17',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:264px;width:604px;height:154px;',
			height: 154,width: 604,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ФизЛицо',
				},
				{
					text:'ВидРасчета',
				},
				{
					text:'Действие',
				},
				{
					text:'ДатаДействия',
				},
				{
					text:'ДатаДействияКонец',
				},
				{
					text:'Показатели',
				},
				{
					text:'НаименованиеПоказатель1',
				},
				{
					text:'Показатель1',
				},
				{
					text:'Валюта1',
				},
				{
					text:'НаименованиеПоказатель2',
				},
				{
					text:'Показатель2',
				},
				{
					text:'Валюта2',
				},
				{
					text:'НаименованиеПоказатель3',
				},
				{
					text:'Показатель3',
				},
				{
					text:'Валюта3',
				},
				{
					text:'НаименованиеПоказатель4',
				},
				{
					text:'Показатель4',
				},
				{
					text:'Валюта4',
				},
				{
					text:'НаименованиеПоказатель5',
				},
				{
					text:'Показатель5',
				},
				{
					text:'Валюта5',
				},
				{
					text:'НаименованиеПоказатель6',
				},
				{
					text:'Показатель6',
				},
				{
					text:'Валюта6',
				},
				{
					text:'ДокументОснование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:620px;height:25px;',
			items:
			[
				{
					text:'Разделитель4',
				},
				{
					text:'Действие5',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю1',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Действие5',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:452px;width:620px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:392px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:125px;width:604px;height:93px;',
			height: 93,width: 604,
			columns:
			[
				{
					text:'Физлицо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:101px;width:604px;height:24px;',
			items:
			[
				{
					text:'Действие6',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие8',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'СписокРаботников',
				},
				{
					text:'Действие',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие1',
				},
			]
		},
	]
});