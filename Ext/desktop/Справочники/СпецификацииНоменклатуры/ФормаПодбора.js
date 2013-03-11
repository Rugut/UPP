Ext.define('Справочники.СпецификацииНоменклатуры.ФормаПодбора',
	{
	extend: 'Ext.window.Window',
	height: 445,width: 560,
	iconCls: 'bogus',
	title: 'Справочник Спецификации номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:149px;width:544px;height:242px;',
			height: 242,width: 544,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'КодВерсии',
				},
				{
					text:'Наименование',
				},
				{
					text:'Активная',
				},
				{
					text:'ВидСпецификации',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:544px;height:110px;',
			height: 110,width: 544,
			columns:
			[
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:560px;height:25px;',
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