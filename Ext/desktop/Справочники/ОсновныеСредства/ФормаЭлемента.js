Ext.define('Справочники.ОсновныеСредства.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 495,width: 764,
	iconCls: 'bogus',
	title: 'Основные средства',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:666px;top:33px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:484px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПрочиеСведения',
			style: 'position:absolute;left:94px;top:443px;width:662px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:764px;height:25px;',
			items:
			[
				{
					text:'ДокументыКомплектацииОС',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие1',
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
			style: 'position:absolute;left:0px;top:470px;width:764px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:748px;height:334px;',
			height: 334,width: 748,
			items:
			[
				{
					title:'ОсновныеСведения',
				},
				{
					title:'Страница1',
				},
				{
					title:'Страница2',
				},
				{
					title:'Страница3',
				},
				{
					title:'Страница4',
				},
				{
					title:'СвойстваИЗначения',
				},
				{
					title:'Категории',
				},
				{
					title:'СведенияОНедвижимости',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:484px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИнвентарныйНомер',
			style: 'position:absolute;left:666px;top:57px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСведений',
			style: 'position:absolute;left:94px;top:81px;width:122px;height:19px;',
		},
	]
});