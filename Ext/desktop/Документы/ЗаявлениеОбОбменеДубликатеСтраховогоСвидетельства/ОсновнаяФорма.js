Ext.define('Документы.ЗаявлениеОбОбменеДубликатеСтраховогоСвидетельства.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:269px;height:184px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заявление об обмене дубликате страхового свидетельства',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьПериодСоставленияОтчета',
			text: '',
			style: 'position:absolute;left:42px;top:33px;width:176px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущийПериод',
			text: '',
			style: 'position:absolute;left:17px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующийПериод',
			text: '',
			style: 'position:absolute;left:222px;top:33px;width:21px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ОписаниеНормативДок',
			text: '',
			style: 'position:absolute;left:17px;top:84px;width:244px;height:40px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Период составления отчета',
			style: 'position:absolute;left:8px;top:8px;width:253px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Форма',
			style: 'position:absolute;left:8px;top:66px;width:253px;height:15px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораФормы',
			text: 'Выбрать форму',
			style: 'position:absolute;left:17px;top:128px;width:100px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:159px;width:269px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
});