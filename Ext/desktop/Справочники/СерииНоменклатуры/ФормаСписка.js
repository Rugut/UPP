Ext.define('Справочники.СерииНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Серии номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:320px;',
			height: 320,width: 764,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Владелец',
					width:'76',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Номер серии',
					width:'100',
				},
				{
					text:'Номер и дата сертификата',
					width:'180',
				},
				{
					text:'Срок годности',
					width:'80',
				},
				{
					text:'Номер ГТД',
					width:'220',
				},
				{
					text:'Страна происхождения',
					width:'220',
				},
				{
					text:'Комментарий',
					width:'253',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'',
				},
					]
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				'-',
				{
					text:'',
				},
			]
		},
	]
});