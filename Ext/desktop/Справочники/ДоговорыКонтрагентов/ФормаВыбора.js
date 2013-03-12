Ext.define('Справочники.ДоговорыКонтрагентов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:742px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Валюта',
					width:'60',
				},
				{
					text:'Организация',
					width:'95',
				},
				{
					text:'Взаиморасчеты',
					width:'108',
				},
				{
					text:'Вид договора',
					width:'131',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Дата',
					width:'80',
				},
				{
					text:'Владелец',
					width:'96',
				},
				{
					text:'Основной проект',
					width:'231',
				},
				{
					text:'Срок действия договора',
					width:'84',
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
					text:'Выбрать',
				},
				'-',
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
					width:'100',
				},
			]
		},
	]
});