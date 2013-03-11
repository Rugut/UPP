Ext.define('Документы.ПеремещениеОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 464,width: 665,
	iconCls: 'bogus',
	title: 'Перемещение ОС',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:87px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:204px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:56px;width:228px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:412px;width:561px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:389px;width:561px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:104px;top:99px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:429px;top:99px;width:228px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МОЛ',
			style: 'position:absolute;left:104px;top:122px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МОЛОрганизации',
			style: 'position:absolute;left:429px;top:122px;width:228px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:184px;width:649px;height:24px;',
			items:
			[
				{
					text:'ЗаполнитьПоНаименованию',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подбор',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПодменюЗаполнить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:209px;width:649px;height:175px;',
			height: 175,width: 649,
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
			style: 'position:absolute;left:0px;top:0px;width:665px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Подменю1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:439px;width:665px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
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
					text:'Печать',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Событие',
			style: 'position:absolute;left:104px;top:145px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СобытиеРегл',
			style: 'position:absolute;left:429px;top:145px;width:228px;height:19px;',
		},
	]
});