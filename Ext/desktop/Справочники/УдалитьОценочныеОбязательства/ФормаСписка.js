Ext.define('Справочники.УдалитьОценочныеОбязательства.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:509px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '(не используется) Оценочные обязательства',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:493px;height:259px;',
			height: 259,width: 493,
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
					width:'290',
				},
				{
					text:'Дата исполнения',
					width:'170',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:509px;height:25px;',
			items:
			[
			]
		},
	]
});