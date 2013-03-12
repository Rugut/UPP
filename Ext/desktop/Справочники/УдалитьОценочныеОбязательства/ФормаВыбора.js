Ext.define('Справочники.УдалитьОценочныеОбязательства.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:566px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '(не используется) Оценочные обязательства',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:550px;height:259px;',
			height: 259,width: 550,
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
					text:'Дата исполнения',
					width:'104',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:566px;height:25px;',
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