Ext.define('Справочники.Проекты.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 624,
	iconCls: 'bogus',
	title: 'Проекты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:442px;height:320px;',
			height: 320,width: 442,
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
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:320px;',
			height: 320,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:624px;height:25px;',
			items:
			[
				{
					text:'ПраваДоступаПользователейКТекущемуЭлементу',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ДействиеСвойства',
				},
				{
					text:'Файлы',
				},
				{
					text:'ДействиеКатегории',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'РазделительПрава',
				},
				{
					text:'Права',
				},
				{
					text:'ПраваДоступаПользователейКоВсемуСправочнику',
				},
				{
					text:'Файлы',
				},
			]
		},
	]
});