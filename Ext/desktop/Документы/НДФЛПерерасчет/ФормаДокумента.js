Ext.define('Документы.НДФЛПерерасчет.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 401,width: 697,
	iconCls: 'bogus',
	title: 'Перерасчет НДФЛ',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:324px;width:593px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:349px;width:593px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:9px;top:123px;width:680px;height:24px;',
			items:
			[
				{
					text:'Действие15',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие13',
				},
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:9px;top:147px;width:680px;height:171px;',
			height: 171,width: 680,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ФизЛицо',
				},
				{
					text:'ПодразделениеОрганизации',
				},
				{
					text:'НалогПоСтавке13',
				},
				{
					text:'ПримененныйВычетЛичный',
				},
				{
					text:'КолонкаЗаголовок',
				},
				{
					text:'ПримененныйВычетНаДетей',
				},
				{
					text:'ПримененныйВычетНаДетейДвойной',
				},
				{
					text:'ПримененныйВычетНаДетейДвойнойВторой',
				},
				{
					text:'ПримененныйВычетНаВторогоРебенка',
				},
				{
					text:'ПримененныйВычетНаВторогоРебенкаДвойной',
				},
				{
					text:'ПримененныйВычетНаВторогоРебенкаДвойнойВторой',
				},
				{
					text:'ПримененныйВычетНаТретьегоРебенка',
				},
				{
					text:'ПримененныйВычетНаТретьегоРебенкаДвойной',
				},
				{
					text:'ПримененныйВычетНаТретьегоРебенкаДвойнойВторой',
				},
				{
					text:'ПримененныйВычетНаДетейИнвалидов',
				},
				{
					text:'ПримененныйВычетНаДетейИнвалидовДвойной',
				},
				{
					text:'ПримененныйВычетНаДетейИнвалидовДвойнойВторой',
				},
				{
					text:'КолонкаЗаголовокИмущественный',
				},
				{
					text:'ПримененныйВычетИмущественныйРасход',
				},
				{
					text:'ПримененныйВычетИмущественныйПроцентыПоКредитам',
				},
				{
					text:'ПримененныйВычетИмущественныйПроцентыПриПерекредитовании',
				},
				{
					text:'НалогПоСтавке09',
				},
				{
					text:'НалогПоСтавке35',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:697px;height:25px;',
			items:
			[
				{
					text:'Разделитель6',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Рассчитать',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель5',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:376px;width:697px;height:25px;',
			items:
			[
				{
					text:'Действие1',
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
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодВзаиморасчетов',
			style: 'position:absolute;left:423px;top:81px;width:266px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:96px;top:81px;width:80px;height:19px;',
		},
	]
});