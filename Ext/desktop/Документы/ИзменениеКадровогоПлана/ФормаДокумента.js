Ext.define('Документы.ИзменениеКадровогоПлана.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 423,width: 549,
	iconCls: 'bogus',
	title: 'Изменение кадрового плана',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:98px;width:533px;height:24px;',
			items:
			[
				{
					text:'ЗаполнитьПоРасхождениям',
				},
				{
					text:'Действие1',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьПоТекущемуСостоянию',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:122px;width:533px;height:220px;',
			height: 220,width: 533,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Подразделение',
				},
				{
					text:'Должность',
				},
				{
					text:'Количество',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:93px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:193px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:549px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Подменю',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель4',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:93px;top:371px;width:448px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:398px;width:549px;height:25px;',
			items:
			[
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:93px;top:347px;width:448px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИзменений',
			style: 'position:absolute;left:421px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:533px;height:25px;',
			height: 25,width: 533,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});