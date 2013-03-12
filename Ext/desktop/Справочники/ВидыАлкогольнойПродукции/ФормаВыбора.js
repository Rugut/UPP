Ext.define('Справочники.ВидыАлкогольнойПродукции.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:650px;height:350px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Виды алкогольной продукции',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:634px;height:309px;',
			height: 309,width: 634,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Код',
					width:'63',
				},
				{
					text:'Наименование',
					width:'350',
				},
				{
					text:'Код вида продукции',
					width:'70',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			items:
			[
				{
					text:'Действия формы выбрать',
				},
				'-',
			]
		},
	]
});