Ext.define('Документы.КомплектацияОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 367,width: 493,
	iconCls: 'bogus',
	title: 'Комплектация ОС',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:117px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:227px;top:33px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновноеСредство',
			style: 'position:absolute;left:117px;top:56px;width:368px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:124px;width:477px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ЗаполнитьПоНаименованию',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:148px;width:477px;height:140px;',
			height: 140,width: 477,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ИнвентарныйНомер',
				},
				{
					text:'ОсновноеСредство',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:493px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Структура��одчиненностиДокумента',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:342px;width:493px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:92px;top:292px;width:393px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:92px;top:315px;width:393px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Событие',
			style: 'position:absolute;left:117px;top:80px;width:368px;height:19px;',
		},
	]
});