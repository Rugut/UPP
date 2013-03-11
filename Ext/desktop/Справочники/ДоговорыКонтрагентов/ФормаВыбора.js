Ext.define('Справочники.ДоговорыКонтрагентов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 742,
	iconCls: 'bogus',
	title: 'Договоры контрагентов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:560px;height:320px;',
			height: 320,width: 560,
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
					text:'ВалютаВзаиморасчетов',
				},
				{
					text:'Организация',
				},
				{
					text:'ВедениеВзаиморасчетов',
				},
				{
					text:'ВидДоговора',
				},
				{
					text:'Номер',
				},
				{
					text:'Дата',
				},
				{
					text:'Владелец',
				},
				{
					text:'ОсновнойПроект',
				},
				{
					text:'СрокДействия',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:742px;height:25px;',
			items:
			[
				{
					text:'Файлы',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
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
	]
});