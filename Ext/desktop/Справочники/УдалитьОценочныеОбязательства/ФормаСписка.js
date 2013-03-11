Ext.define('Справочники.УдалитьОценочныеОбязательства.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 509,
	iconCls: 'bogus',
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
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'ДатаИсполнения',
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