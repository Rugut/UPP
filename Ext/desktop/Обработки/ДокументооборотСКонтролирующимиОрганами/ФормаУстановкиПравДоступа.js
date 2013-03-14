Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормаУстановкиПравДоступа',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:456px;height:444px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выберите пользователей учетной записи',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:72px;width:440px;height:304px;',
			height: 304,width: 440,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Пользователь',
					width:'141',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:419px;width:456px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Электронный документооборот с контролирующими органами по организации #Организация успешно настроен.
Создана учетная запись: #УчетнаяЗапись
Выберите пользователей, имеющих право использовать эту учетную запись:',
			style: 'position:absolute;left:8px;top:8px;width:440px;height:56px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Позже список пользователей можно будет изменить на вкладке "Документооборот" формы организации.',
			style: 'position:absolute;left:8px;top:384px;width:440px;height:28px;',
		},
	]
});