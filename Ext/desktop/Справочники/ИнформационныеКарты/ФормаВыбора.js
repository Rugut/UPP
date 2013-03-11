Ext.define('Справочники.ИнформационныеКарты.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 355,width: 765,
	iconCls: 'bogus',
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
			style: 'position:absolute;left:8px;top:33px;width:145px;height:314px;',
			height: 314,width: 145,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:765px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});