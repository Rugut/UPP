Ext.define('Справочники.ИнформационныеКарты.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:680px;height:352px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Информационные карты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:513px;height:311px;',
			height: 311,width: 513,
			columns:
			[
				{
					text:'',
					width:'34',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'225',
				},
				{
					text:'Код карты',
					width:'147',
				},
				{
					text:'Владелец карты',
					width:'151',
				},
				{
					text:'Вид дисконтной карты',
					width:'152',
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
			style: 'position:absolute;left:8px;top:33px;width:145px;height:311px;',
			height: 311,width: 145,
			columns:
			[
				{
					text:'Наименование',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:680px;height:25px;',
			items:
			[
			]
		},
	]
});