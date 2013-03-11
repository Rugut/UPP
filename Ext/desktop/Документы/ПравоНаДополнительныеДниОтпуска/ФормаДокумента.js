Ext.define('Документы.ПравоНаДополнительныеДниОтпуска.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 422,width: 410,
	iconCls: 'bogus',
	title: 'Право на дополнительные дни отпуска',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:410px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'ОткрытьСвойства',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие7',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие5',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ОткрытьКатегории',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:397px;width:410px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель1',
				},
			]
		},
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:98px;width:394px;height:220px;',
			height: 220,width: 394,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ТабельныйНомерСтрока',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'Количество',
				},
				{
					text:'Примечание',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:74px;width:394px;height:24px;',
			items:
			[
				{
					text:'Действие16',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие12',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие11',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие17',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие13',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'СписокРаботников',
				},
				{
					text:'Действие14',
				},
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:345px;width:306px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:370px;width:306px;height:19px;',
		},
	]
});