Ext.define('Справочники.ПоказателиСхемМотивации.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 393,width: 413,
	iconCls: 'bogus',
	title: 'Показатели схем мотивации',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:96px;top:39px;width:309px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипПоказателя',
			style: 'position:absolute;left:166px;top:104px;width:230px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВозможностьИзменения',
			style: 'position:absolute;left:166px;top:161px;width:230px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:413px;height:25px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:368px;width:413px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПоказателя',
			style: 'position:absolute;left:166px;top:132px;width:230px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Идентификатор',
			style: 'position:absolute;left:96px;top:65px;width:309px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:193px;width:397px;height:167px;',
			height: 167,width: 397,
			items:
			[
				{
					title:'АнализПоказателей',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФактическийПоказатель',
			style: 'position:absolute;left:28px;top:122px;width:336px;height:19px;',
		},
					]
				},
				{
					title:'Использование',
					items:
					[
					]
				},
				{
					title:'ШкалаОценки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:383px;height:110px;',
			height: 110,width: 383,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
				{
					text:'Размер',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:383px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'СуммовойПоказатель',
					items:
					[
					]
				},
				{
					title:'Валюта',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:56px;top:6px;width:333px;height:19px;',
		},
					]
				},
				{
					title:'Стаж',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРасчетаСуммы',
			style: 'position:absolute;left:166px;top:132px;width:230px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммируемыйПоказатель',
			style: 'position:absolute;left:166px;top:161px;width:230px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСтажа',
			style: 'position:absolute;left:166px;top:161px;width:230px;height:19px;',
		},
	]
});