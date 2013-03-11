Ext.define('Справочники.СерииНоменклатуры.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 708,
	iconCls: 'bogus',
	title: 'Серии номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:692px;height:320px;',
			height: 320,width: 692,
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
					text:'СерийныйНомер',
				},
				{
					text:'Сертификат',
				},
				{
					text:'СрокГодности',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:708px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});