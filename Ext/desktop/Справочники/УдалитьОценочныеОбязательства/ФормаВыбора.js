Ext.define('Справочники.УдалитьОценочныеОбязательства.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 566,
	iconCls: 'bogus',
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
			style: 'position:absolute;left:0px;top:0px;width:566px;height:25px;',
			items:
			[
				{
					text:'ДействияФормыВыбрать',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});