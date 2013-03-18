Ext.define('Справочники.ФизическиеЛица.ФормаВводаДанныхТруд',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:371px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'№',
					width:'28',
				},
				{
					text:'Предшествующее место работы',
					width:'100',
				},
				{
					text:'Начало работы',
					width:'100',
				},
				{
					text:'Окончание работы',
					width:'100',
				},
				{
					text:'Должность по предшествующему месту работы',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'Форма СЗВ-К',
				},
				'-',
				{
					text:'Заполнить по данным СЗВ-К',
				},
				'-',
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
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
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
					text:'Вид стажа',
					width:'100',
				},
				{
					text:'Дата отсчета',
					width:'100',
				},
				{
					text:'Лет',
					width:'50',
				},
				{
					text:'Месяцев',
					width:'50',
				},
				{
					text:'Дней',
					width:'50',
				},
			]
		},
	]
});