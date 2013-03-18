Ext.define('Обработки.РегистрацияИзмененийДляОбмена.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:702px;height:445px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистрация изменений для обмена',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:420px;width:702px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Справка',
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Показать изменения',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьУзелОбмена',
			text: 'Узел обмена:',
			style: 'position:absolute;left:8px;top:4px;width:74px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УзелОбмена',
			style: 'position:absolute;left:85px;top:4px;width:609px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:128px;width:686px;height:284px;',
			height: 284,width: 686,
			columns:
			[
				{
					text:'Имя',
					width:'342',
				},
				{
					text:'Авто регистрация',
					width:'100',
				},
				{
					text:'Удален',
					width:'100',
				},
				{
					text:'Количество зарегистрированных',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:686px;height:24px;',
			items:
			[
				{
					text:'Развернуть дерево',
				},
				{
					text:'Свернуть дерево',
				},
				'-',
				{
					text:'Отменить регистрацию',
				},
				{
					text:'Добавить регистрацию',
				},
				{
					text:'Показать зарегистрированные изменения данного типа',
				},
				'-',
				{
					text:'Результат стандартной выгрузки',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать объекты, для которых зарегистрированы изменения',
			style: 'position:absolute;left:8px;top:52px;width:419px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать количество объектов, для которых зарегистрированы изменения',
			style: 'position:absolute;left:8px;top:28px;width:451px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'УдалитьРегистрациюДляВсехОбъектов',
			text: 'Удалить всю регистрацию ...',
			style: 'position:absolute;left:328px;top:76px;width:167px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗарегистрироватьИзмененияДляВсехОбъектов',
			text: 'Зарегистрировать все ...',
			style: 'position:absolute;left:8px;top:76px;width:137px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗарегистрироватьИзмененияПоОдномуОбъекту',
			text: 'Зарегистрировать по одному ...',
			style: 'position:absolute;left:151px;top:76px;width:171px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаИзменитьНомера',
			text: 'Изменить номера сообщений...',
			style: 'position:absolute;left:500px;top:76px;width:167px;height:19px;',
		},
	]
});