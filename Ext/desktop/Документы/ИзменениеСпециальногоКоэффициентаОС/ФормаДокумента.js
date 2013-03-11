Ext.define('Документы.ИзменениеСпециальногоКоэффициентаОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 417,width: 476,
	iconCls: 'bogus',
	title: 'Изменение специального коэффициента для расчета амортизации ОС',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:476px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:392px;width:476px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:99px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:199px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:99px;top:342px;width:369px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:99px;top:365px;width:369px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:99px;top:55px;width:220px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:118px;width:460px;height:220px;',
			height: 220,width: 460,
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
				{
					text:'СпециальныйКоэффициент',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:94px;width:460px;height:24px;',
			items:
			[
				{
					text:'ЗаполнитьДляСписка',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие8',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'ЗаполнитьПоНаименованию',
				},
			]
		},
	]
});