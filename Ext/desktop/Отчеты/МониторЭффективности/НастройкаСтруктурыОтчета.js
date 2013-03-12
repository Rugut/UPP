Ext.define('Отчеты.МониторЭффективности.НастройкаСтруктурыОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:801px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка структуры монитора',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:296px;width:801px;height:25px;',
			items:
			[
				'-',
				{
					text:'Справка',
				},
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:785px;height:222px;',
			height: 222,width: 785,
			columns:
			[
				{
					text:'Показатель',
					width:'156',
				},
				{
					text:'Индикатор динамики',
					width:'62',
				},
				{
					text:'Индикатор состояния',
					width:'60',
				},
				{
					text:'Текущее значение',
					width:'54',
				},
				{
					text:'Значение предыдущего периода',
					width:'75',
				},
				{
					text:'Изменение %',
					width:'66',
				},
				{
					text:'Изменение абс',
					width:'64',
				},
				{
					text:'План-факт',
					width:'288',
				},
				{
					text:'План',
					width:'35',
				},
				{
					text:'% выполнения',
					width:'83',
				},
				{
					text:'Отклонение %',
					width:'81',
				},
				{
					text:'Отклонение абс',
					width:'88',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:785px;height:24px;',
			items:
			[
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'&Изменить',
				},
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Добавить группу',
				},
				'-',
				'-',
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Снять флажки',
				},
				{
					text:'Установить флажки',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Переместить вверх',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьТекстОписания',
			text: '',
			style: 'position:absolute;left:69px;top:260px;width:723px;height:28px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОписание',
			text: 'Описание:',
			style: 'position:absolute;left:8px;top:260px;width:58px;height:19px;',
		},
	]
});