Ext.define('Документы.ИзменениеГрафиковАмортизацииОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 442,width: 344,
	iconCls: 'bogus',
	title: 'Изменение графиков амортизации ОС',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:81px;width:242px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:390px;width:242px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:367px;width:242px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:191px;width:328px;height:24px;',
			items:
			[
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ЗаполнитьПоНаименованию',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подбор',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:215px;width:328px;height:147px;',
			height: 147,width: 328,
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
			style: 'position:absolute;left:0px;top:0px;width:344px;height:25px;',
			items:
			[
				{
					text:'Подменю1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:417px;width:344px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГрафикАмортизации',
			style: 'position:absolute;left:94px;top:104px;width:242px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Событие',
			style: 'position:absolute;left:94px;top:127px;width:242px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СобытиеРегл',
			style: 'position:absolute;left:94px;top:150px;width:242px;height:19px;',
		},
	]
});