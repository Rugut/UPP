Ext.define('Справочники.ФизическиеЛица.ФормаВводаДанныхТруд',
	{
	extend: 'Ext.window.Window',
	height: 371,width: 400,
	iconCls: 'bogus',
	title: 'Физические лица',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:54px;width:384px;height:118px;',
			height: 118,width: 384,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Организация',
				},
				{
					text:'НачалоРаботы',
				},
				{
					text:'ОкончаниеРаботы',
				},
				{
					text:'Должность',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'ДействиеВызватьФормуСЗВК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:346px;width:400px;height:25px;',
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
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СеверныйСтаж',
			style: 'position:absolute;left:8px;top:319px;width:384px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:198px;width:384px;height:94px;',
			height: 94,width: 384,
			columns:
			[
				{
					text:'ВидСтажа',
				},
				{
					text:'ДатаОтсчета',
				},
				{
					text:'РазмерЛет',
				},
				{
					text:'РазмерМесяцев',
				},
				{
					text:'РазмерДней',
				},
			]
		},
	]
});