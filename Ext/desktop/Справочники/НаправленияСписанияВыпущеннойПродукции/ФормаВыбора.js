Ext.define('Справочники.НаправленияСписанияВыпущеннойПродукции.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 281,width: 604,
	iconCls: 'bogus',
	title: 'Направления списания выпущенной продукции (услуг)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:588px;height:240px;',
			height: 240,width: 588,
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
					text:'Организация',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
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