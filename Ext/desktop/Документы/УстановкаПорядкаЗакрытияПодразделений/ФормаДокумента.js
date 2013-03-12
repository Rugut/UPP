Ext.define('Документы.УстановкаПорядкаЗакрытияПодразделений.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:636px;height:346px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка порядка закрытия подразделений',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:636px;height:25px;',
			items:
			[
				'-',
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:321px;width:636px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Закрыть',
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:271px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:271px;width:533px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:294px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:294px;width:533px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:122px;width:619px;height:144px;',
			height: 144,width: 619,
			columns:
			[
				{
					text:'Порядок',
					width:'49',
				},
				{
					text:'Подразделение',
					width:'347',
				},
				{
					text:'Вид подразделения',
					width:'105',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:98px;width:619px;height:24px;',
			items:
			[
				{
					text:'Заполнить подразделения',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:328px;top:33px;width:62px;height:19px;',
		},
	]
});