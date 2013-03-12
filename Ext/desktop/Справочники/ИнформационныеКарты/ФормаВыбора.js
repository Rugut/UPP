Ext.define('Справочники.ИнформационныеКарты.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:765px;height:355px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Информационные карты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:598px;height:314px;',
			height: 314,width: 598,
			columns:
			[
				{
					text:'',
					width:'33',
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
					text:'Код карты',
					width:'120',
				},
				{
					text:'Владелец карты',
					width:'120',
				},
				{
					text:'Вид дисконтной карты',
					width:'350',
				},
				{
					text:'Вид карты',
					width:'120',
				},
				{
					text:'Тип карты',
					width:'120',
				},
				{
					text:'Тип штрих кода',
					width:'120',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:145px;height:314px;',
			height: 314,width: 145,
			columns:
			[
				{
					text:'Наименование',
					width:'132',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:765px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});