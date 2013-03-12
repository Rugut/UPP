Ext.define('Справочники.КлассификаторСтранМира.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:528px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Классификатор стран мира',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:512px;height:280px;',
			height: 280,width: 512,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Полное наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:528px;height:25px;',
			items:
			[
				{
					text:'Подбор из ОКСМ',
				},
				'-',
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});