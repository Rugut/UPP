Ext.define('Справочники.ИнформационныеКарты.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 352,width: 680,
	iconCls: 'bogus',
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
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'КодКарты',
				},
				{
					text:'ВладелецКарты',
				},
				{
					text:'ВидДисконтнойКарты',
				},
				{
					text:'ВидКарты',
				},
				{
					text:'ТипКарты',
				},
				{
					text:'ТипШтрихКода',
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