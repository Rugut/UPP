Ext.define('Справочники.СерииНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 780,
	iconCls: 'bogus',
	title: 'Серии номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:320px;',
			height: 320,width: 764,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Владелец',
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
					text:'НомерИДатаСертификата',
				},
				{
					text:'СрокГодности',
				},
				{
					text:'НомерГТД',
				},
				{
					text:'СтранаПроисхождения',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Подменю1',
				},
				{
					text:'Файлы',
				},
				{
					text:'Разделитель13',
				},
				{
					text:'Подменю',
				},
				{
					text:'Файлы',
				},
				{
					text:'Разделитель5',
				},
			]
		},
	]
});